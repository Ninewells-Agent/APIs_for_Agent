const fs = require('fs');
const path = require('path');

function readJson(filePath) {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
}

function ensureArray(value, name) {
    if (!Array.isArray(value)) {
        throw new Error(`${name} must be an array`);
    }
}

function validateScheduleTemplate(schedule, index) {
    if (!schedule || typeof schedule !== 'object') {
        throw new Error(`Schedule at index ${index} is not an object`);
    }

    ensureArray(schedule.workingDays, `schedule[${index}].workingDays`);
    ensureArray(schedule.timeSlots, `schedule[${index}].timeSlots`);

    schedule.timeSlots.forEach((slot, slotIndex) => {
        if (!slot || typeof slot !== 'object') {
            throw new Error(`schedule[${index}].timeSlots[${slotIndex}] is not an object`);
        }
        if (typeof slot.start !== 'string' || typeof slot.end !== 'string') {
            throw new Error(`schedule[${index}].timeSlots[${slotIndex}] must include string start/end`);
        }
        if (typeof slot.duration !== 'number') {
            throw new Error(`schedule[${index}].timeSlots[${slotIndex}] must include numeric duration`);
        }
    });
}

function randomIndex(max, rng) {
    return Math.floor(rng() * max);
}

function createSeededRandom(seedValue) {
    let seed = Number(seedValue);
    if (!Number.isFinite(seed)) {
        throw new Error('Seed must be a finite number');
    }

    seed = seed % 2147483647;
    if (seed <= 0) {
        seed += 2147483646;
    }

    return function seededRandom() {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    };
}

function cloneScheduleTemplate(template) {
    return {
        workingDays: [...template.workingDays],
        timeSlots: template.timeSlots.map((slot) => ({
            start: slot.start,
            end: slot.end,
            duration: slot.duration
        }))
    };
}

function buildDoctorComment(doctor) {
    const name = doctor.doctorName || 'Unknown Doctor';
    const specialization = Array.isArray(doctor.specializations) && doctor.specializations[0]
        ? doctor.specializations[0].specialization
        : 'General';
    const tele = Number(doctor.isTele) === 1 ? ' (Tele)' : '';

    return `${name} - ${specialization}${tele}`;
}

function toAvailabilityScheduleJs(availabilitySchedule, doctorCommentById) {
    const lines = [];
    lines.push('const availabilitySchedule = {');

    const doctorIds = Object.keys(availabilitySchedule);
    doctorIds.forEach((doctorID, idx) => {
        const schedule = availabilitySchedule[doctorID];
        const trailingComma = idx < doctorIds.length - 1 ? ',' : '';

        lines.push(`    "${doctorID}": { // ${doctorCommentById[doctorID]}`);
        lines.push(`        workingDays: [${schedule.workingDays.join(', ')}],`);
        lines.push('        timeSlots: [');

        schedule.timeSlots.forEach((slot, slotIdx) => {
            const slotComma = slotIdx < schedule.timeSlots.length - 1 ? ',' : '';
            lines.push(`            { start: "${slot.start}", end: "${slot.end}", duration: ${slot.duration} }${slotComma}`);
        });

        lines.push('        ]');
        lines.push(`    }${trailingComma}`);
    });

    lines.push('};');
    lines.push('');
    lines.push('module.exports = availabilitySchedule;');

    return lines.join('\n');
}

function main() {
    const baseDir = __dirname;

    const doctorsPath = process.argv[2]
        ? path.resolve(process.cwd(), process.argv[2])
        : path.join(baseDir, 'Doctor List.json');

    const schedulesPath = process.argv[3]
        ? path.resolve(process.cwd(), process.argv[3])
        : path.join(baseDir, 'schedules.json');

    const outputJsonPath = process.argv[4]
        ? path.resolve(process.cwd(), process.argv[4])
        : path.join(baseDir, 'availabilitySchedule.generated.json');

    const outputJsPath = process.argv[5]
        ? path.resolve(process.cwd(), process.argv[5])
        : path.join(baseDir, 'availabilitySchedule.generated.js');

    const seedArg = process.argv[6];
    const rng = seedArg !== undefined ? createSeededRandom(seedArg) : Math.random;

    const doctors = readJson(doctorsPath);
    const scheduleTemplates = readJson(schedulesPath);

    ensureArray(doctors, 'Doctor list');
    ensureArray(scheduleTemplates, 'Schedule templates');

    if (scheduleTemplates.length === 0) {
        throw new Error('Schedule template list is empty');
    }

    scheduleTemplates.forEach(validateScheduleTemplate);

    const availabilitySchedule = {};
    const doctorCommentById = {};
    const duplicates = [];

    doctors.forEach((doctor, index) => {
        if (!doctor || typeof doctor !== 'object') {
            return;
        }

        if (!doctor.doctorID) {
            return;
        }

        if (availabilitySchedule[doctor.doctorID]) {
            duplicates.push(doctor.doctorID);
            return;
        }

        const randomTemplate = scheduleTemplates[randomIndex(scheduleTemplates.length, rng)];
        availabilitySchedule[doctor.doctorID] = cloneScheduleTemplate(randomTemplate);
        doctorCommentById[doctor.doctorID] = buildDoctorComment(doctor);

        if (!doctor.doctorName) {
            console.warn(`Doctor at index ${index} has doctorID ${doctor.doctorID} but no doctorName`);
        }
    });

    fs.writeFileSync(outputJsonPath, `${JSON.stringify(availabilitySchedule, null, 2)}\n`, 'utf8');
    fs.writeFileSync(outputJsPath, `${toAvailabilityScheduleJs(availabilitySchedule, doctorCommentById)}\n`, 'utf8');

    console.log(`Doctors processed: ${doctors.length}`);
    console.log(`Unique doctor schedules generated: ${Object.keys(availabilitySchedule).length}`);
    console.log(`Duplicate doctor IDs skipped: ${duplicates.length}`);
    console.log(`JSON output: ${outputJsonPath}`);
    console.log(`JS output: ${outputJsPath}`);
}

try {
    main();
} catch (error) {
    console.error('Failed to generate availability schedule:', error.message);
    process.exit(1);
}
