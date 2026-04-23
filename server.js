require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const availabilitySchedule = require('./availabilitySchedule.generated');
const doctors = require('./Doctor List.json');
const { createEvent, getEventsForDoctorOnDate } = require('./googleCalendar');

// Middleware
app.use(express.json());

// Sample doctors data
// const doctors = [
//     {
//         "doctorName": "Dr. Vanessa Brekke",
//         "doctorID": "D7619",
//         "gender": "Female",
//         "slmcId": "95810",
//         "isTele": 0,
//         "hospitals": [
//             {
//                 "hospitalId": "H18",
//                 "hospital": "Ninewells Hospital",
//                 "address": {
//                     "city": "Kandy"
//                 }
//             }
//         ],
//         "specializations": [
//             {
//                 "specialization": "Pediatrics",
//                 "specializationId": "SPuS6"
//             }
//         ]
//     },
//     {
//         "doctorName": "Dr. Cecelia Dare",
//         "doctorID": "D7924",
//         "gender": "Female",
//         "slmcId": "92672",
//         "isTele": 0,
//         "hospitals": [
//             {
//                 "hospitalId": "H77",
//                 "hospital": "Ninewells Hospital",
//                 "address": {
//                     "city": "Colombo"
//                 }
//             }
//         ],
//         "specializations": [
//             {
//                 "specialization": "General Physician",
//                 "specializationId": "SPUaU"
//             }
//         ]
//     },
//     {
//         "doctorName": "Dr. Newton Stamm",
//         "doctorID": "D5399",
//         "gender": "Female",
//         "slmcId": "15684",
//         "isTele": 1,
//         "hospitals": [
//             {
//                 "hospitalId": "H57",
//                 "hospital": "Ninewells Hospital",
//                 "address": {
//                     "city": "Jaffna"
//                 }
//             }
//         ],
//         "specializations": [
//             {
//                 "specialization": "Pediatrics",
//                 "specializationId": "SPyLP"
//             }
//         ]
//     },
//     {
//         "doctorName": "Dr. Osvaldo Leannon",
//         "doctorID": "D1952",
//         "gender": "Male",
//         "slmcId": "66923",
//         "isTele": 0,
//         "hospitals": [
//             {
//                 "hospitalId": "H15",
//                 "hospital": "Ninewells Hospital",
//                 "address": {
//                     "city": "Jaffna"
//                 }
//             }
//         ],
//         "specializations": [
//             {
//                 "specialization": "Cardiology",
//                 "specializationId": "SPtUP"
//             }
//         ]
//     },
//     {
//         "doctorName": "Dr. Gloria Hackett",
//         "doctorID": "D6771",
//         "gender": "Male",
//         "slmcId": "61003",
//         "isTele": 1,
//         "hospitals": [
//             {
//                 "hospitalId": "H86",
//                 "hospital": "Ninewells Hospital",
//                 "address": {
//                     "city": "Kandy"
//                 }
//             }
//         ],
//         "specializations": [
//             {
//                 "specialization": "Oncology",
//                 "specializationId": "SPmuA"
//             }
//         ]
//     }
// ];

// Sample availability data
// In a real application, this would come from a database
// const availabilitySchedule = {
//     "D7619": { // Dr. Vanessa Brekke - Pediatrics
//         workingDays: [1, 2, 3, 4, 5], // Monday to Friday
//         timeSlots: [
//             { start: "09:00", end: "09:30", duration: 30 },
//             { start: "09:30", end: "10:00", duration: 30 },
//             { start: "10:00", end: "10:30", duration: 30 },
//             { start: "10:30", end: "11:00", duration: 30 },
//             { start: "14:00", end: "14:30", duration: 30 },
//             { start: "14:30", end: "15:00", duration: 30 },
//             { start: "15:00", end: "15:30", duration: 30 }
//         ]
//     },
//     "D7924": { // Dr. Cecelia Dare - Cardiology
//         workingDays: [1, 2, 3, 4, 5, 6], // Monday to Saturday
//         timeSlots: [
//             { start: "08:00", end: "08:30", duration: 30 },
//             { start: "08:30", end: "09:00", duration: 30 },
//             { start: "09:00", end: "09:30", duration: 30 },
//             { start: "09:30", end: "10:00", duration: 30 },
//             { start: "10:00", end: "10:30", duration: 30 },
//             { start: "16:00", end: "16:30", duration: 30 },
//             { start: "16:30", end: "17:00", duration: 30 },
//             { start: "17:00", end: "17:30", duration: 30 }
//         ]
//     },
//     "D5399": { // Dr. Newton Stamm - Pediatrics (Tele)
//         workingDays: [1, 2, 3, 4, 5, 6, 0], // All days
//         timeSlots: [
//             { start: "10:00", end: "10:30", duration: 30 },
//             { start: "10:30", end: "11:00", duration: 30 },
//             { start: "11:00", end: "11:30", duration: 30 },
//             { start: "11:30", end: "12:00", duration: 30 },
//             { start: "15:00", end: "15:30", duration: 30 },
//             { start: "15:30", end: "16:00", duration: 30 },
//             { start: "16:00", end: "16:30", duration: 30 },
//             { start: "16:30", end: "17:00", duration: 30 }
//         ]
//     },
//     "D1952": { // Dr. Osvaldo Leannon - Cardiology
//         workingDays: [2, 4, 6], // Tuesday, Thursday, Saturday
//         timeSlots: [
//             { start: "09:00", end: "09:45", duration: 45 },
//             { start: "09:45", end: "10:30", duration: 45 },
//             { start: "10:30", end: "11:15", duration: 45 },
//             { start: "11:15", end: "12:00", duration: 45 },
//             { start: "14:00", end: "14:45", duration: 45 },
//             { start: "14:45", end: "15:30", duration: 45 }
//         ]
//     },
//     "D6771": { // Dr. Gloria Hackett - Oncology (Tele)
//         workingDays: [1, 3, 5], // Monday, Wednesday, Friday
//         timeSlots: [
//             { start: "08:00", end: "09:00", duration: 60 },
//             { start: "09:00", end: "10:00", duration: 60 },
//             { start: "10:00", end: "11:00", duration: 60 },
//             { start: "13:00", end: "14:00", duration: 60 },
//             { start: "14:00", end: "15:00", duration: 60 },
//             { start: "15:00", end: "16:00", duration: 60 }
//         ]
//     }
// };

// Google Calendar is the source of truth for bookings.
// No in-memory storage — conflicts are checked live against the Calendar API.
const bookings = {};

// Utility function to parse date
function parseDate(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!dateString || dateString.toLowerCase() === 'today') {
        return today;
    }
    
    if (dateString.toLowerCase() === 'tomorrow') {
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    }
    
    // Try to parse ISO date format (YYYY-MM-DD)
    const parsed = new Date(dateString);
    if (!isNaN(parsed.getTime())) {
        return parsed;
    }
    
    return today;
}

// Utility function to format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Normalize doctor names so query variants like "Dr.", "DR", extra spaces, etc. still match.
function normalizeDoctorName(name) {
    if (!name) return '';
    return String(name)
        .toLowerCase()
        .replace(/\./g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Utility function to check if slot is booked
function isSlotBooked(doctorID, date, time) {
    const bookingKey = `${doctorID}-${date}-${time}`;
    return !!bookings[bookingKey];
}

// GET /doctors/availability/slots - Get available slots
app.get('/doctors/availability/slots', (req, res) => {
    const { doctorName, doctorID, specialization, date } = req.query;
    
    // Parse and validate date
    const requestedDate = parseDate(date);
    const formattedDate = formatDate(requestedDate);
    const dayOfWeek = requestedDate.getDay(); // 0 = Sunday, 6 = Saturday
    
    try {
        // Find matching doctors
        let matchingDoctors = [...doctors];
        
        if (doctorID) {
            matchingDoctors = matchingDoctors.filter(d => d.doctorID === doctorID);
        }
        
        if (doctorName) {
            const normalizedQuery = normalizeDoctorName(doctorName);
            matchingDoctors = matchingDoctors.filter(d =>
                normalizeDoctorName(d.doctorName).includes(normalizedQuery)
            );
        }
        
        if (specialization) {
            matchingDoctors = matchingDoctors.filter(d =>
                d.specializations.some(spec => 
                    spec.specialization.toLowerCase().includes(specialization.toLowerCase())
                )
            );
        }
        
        if (matchingDoctors.length === 0) {
            return res.status(404).json({ 
                error: 'No doctors found matching the criteria',
                searchCriteria: { doctorName, doctorID, specialization, date: formattedDate }
            });
        }
        
        // Build response with availability
        const response = matchingDoctors.map(doctor => {
            const schedule = availabilitySchedule[doctor.doctorID];
            
            if (!schedule) {
                return {
                    ...doctor,
                    date: formattedDate,
                    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek],
                    isAvailable: false,
                    slots: [],
                    message: 'No schedule configured for this doctor'
                };
            }
            
            // Check if doctor works on this day
            const isWorkingDay = schedule.workingDays.includes(dayOfWeek);
            
            if (!isWorkingDay) {
                return {
                    ...doctor,
                    date: formattedDate,
                    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek],
                    isAvailable: false,
                    slots: [],
                    message: 'Doctor does not work on this day',
                    workingDays: schedule.workingDays.map(day => 
                        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day]
                    )
                };
            }
            
            // Generate slots with booking status
            const slots = schedule.timeSlots.map(slot => {
                const isBooked = isSlotBooked(doctor.doctorID, formattedDate, slot.start);
                return {
                    ...slot,
                    status: isBooked ? 'booked' : 'available'
                };
            });
            
            const availableSlots = slots.filter(s => s.status === 'available');
            
            return {
                doctorName: doctor.doctorName,
                doctorID: doctor.doctorID,
                specializations: doctor.specializations,
                hospitals: doctor.hospitals,
                isTele: doctor.isTele,
                date: formattedDate,
                dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek],
                isAvailable: availableSlots.length > 0,
                totalSlots: slots.length,
                availableSlots: availableSlots.length,
                bookedSlots: slots.length - availableSlots.length,
                slots: slots
            };
        });
        
        res.json(response);
        
    } catch (error) {
        console.error('Error processing availability request:', error);
        res.status(500).json({ error: 'Error processing availability request' });
    }
});

// GET /doctors/availability/summary - Get availability summary
app.get('/doctors/availability/summary', (req, res) => {
    const { specialization, date, city } = req.query;
    
    const requestedDate = parseDate(date);
    const formattedDate = formatDate(requestedDate);
    const dayOfWeek = requestedDate.getDay();
    
    let matchingDoctors = [...doctors];
    
    // Filter by specialization
    if (specialization) {
        matchingDoctors = matchingDoctors.filter(d =>
            d.specializations.some(spec => 
                spec.specialization.toLowerCase().includes(specialization.toLowerCase())
            )
        );
    }
    
    // Filter by city
    if (city) {
        matchingDoctors = matchingDoctors.filter(d =>
            d.hospitals.some(h => 
                h.address.city.toLowerCase() === city.toLowerCase()
            )
        );
    }
    
    const summary = matchingDoctors.map(doctor => {
        const schedule = availabilitySchedule[doctor.doctorID];
        
        if (!schedule || !schedule.workingDays.includes(dayOfWeek)) {
            return null;
        }
        
        const availableSlots = schedule.timeSlots.filter(slot => 
            !isSlotBooked(doctor.doctorID, formattedDate, slot.start)
        );
        
        if (availableSlots.length === 0) return null;
        
        return {
            doctorName: doctor.doctorName,
            doctorID: doctor.doctorID,
            specialization: doctor.specializations[0].specialization,
            hospital: doctor.hospitals[0].hospital,
            city: doctor.hospitals[0].address.city,
            isTele: doctor.isTele,
            availableSlots: availableSlots.length,
            earliestSlot: availableSlots[0].start,
            latestSlot: availableSlots[availableSlots.length - 1].start
        };
    }).filter(d => d !== null);
    
    res.json({
        date: formattedDate,
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek],
        searchCriteria: { specialization, city },
        totalDoctorsAvailable: summary.length,
        doctors: summary
    });
});

// ── Time helpers ──────────────────────────────────────────────────────────────
function timeToMins(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
}
function minsToTime(mins) {
    return `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
}
// ──────────────────────────────────────────────────────────────────────────────

// POST /doctors/availability/book
// Source of truth: Google Calendar (no in-memory storage).
// Flow: fetch doctor's events for the date → check 30-min overlap → create event.
app.post('/doctors/availability/book', async (req, res) => {
    console.log('Booking body: ', req.body);

    const {
        doctorID, doctorName, date, time,
        patientName, age, gender, contactNo, email, nic
    } = req.body;

    // ── Validate required fields ───────────────────────────────────────────
    if (!doctorID || !date || !time || !patientName) {
        return res.status(400).json({
            error: 'Missing required fields: doctorID, date, time, patientName'
        });
    }

    const SLOT_DURATION_MINS = 30;
    const requestedStart     = timeToMins(time);
    const requestedEnd       = requestedStart + SLOT_DURATION_MINS;
    const endTime            = minsToTime(requestedEnd);

    // ── Fetch existing bookings from Google Calendar ───────────────────────
    let existingEvents;
    try {
        existingEvents = await getEventsForDoctorOnDate(doctorID, date);
        console.log(`Found ${existingEvents.length} existing event(s) for ${doctorID} on ${date}`);
    } catch (calErr) {
        console.error('Failed to fetch calendar events for conflict check:', calErr.message);
        return res.status(500).json({
            error: 'Unable to verify slot availability. Please try again.'
        });
    }

    // ── 30-minute overlap check against live calendar events ──────────────
    // Google Calendar returns dateTime like "2026-04-07T10:00:00+05:30"
    // We extract HH:MM directly from characters 11-16 of that string.
    const conflict = existingEvents.find(evt => {
        const evStartStr = evt.start?.dateTime;
        const evEndStr   = evt.end?.dateTime;
        if (!evStartStr || !evEndStr) return false;

        const evStartMins = timeToMins(evStartStr.substring(11, 16));
        const evEndMins   = timeToMins(evEndStr.substring(11, 16));

        // Overlap: existing starts before requested ends AND existing ends after requested starts
        return evStartMins < requestedEnd && evEndMins > requestedStart;
    });

    if (conflict) {
        const cStart = conflict.start.dateTime.substring(11, 16);
        const cEnd   = conflict.end.dateTime.substring(11, 16);
        return res.status(409).json({
            error   : 'This time slot is not available — the doctor already has a booking that overlaps.',
            conflict: {
                doctorID,
                date,
                existingBooking: `${cStart} - ${cEnd}`,
                requestedSlot  : `${time} - ${endTime}`
            }
        });
    }
    // 

    // ── Create Google Calendar Event ───────────────────────────────────────
    const TIME_ZONE    = 'Asia/Colombo';
    const startISO     = `${date}T${time}:00`;
    const endISO       = `${date}T${endTime}:00`;
    const eventSummary = `Appointment: ${patientName} with ${doctorName || doctorID}`;

    const eventDescription = [
        'NINEWELLS HOSPITAL',
        'APPOINTMENT CONFIRMATION',
        '-----------------------------------------------',
        '',
        'PATIENT DETAILS',
        `  Name        : ${patientName}`,
        `  Age         : ${age       ?? 'N/A'}`,
        `  Gender      : ${gender    ?? 'N/A'}`,
        `  Contact No. : ${contactNo ?? 'N/A'}`,
        `  Email       : ${email     ?? 'N/A'}`,
        `  NIC         : ${nic       ?? 'N/A'}`,
        '',
        'DOCTOR DETAILS',
        `  Doctor      : ${doctorName || doctorID}`,
        `  Doctor ID   : ${doctorID}`,
        '',
        'APPOINTMENT DETAILS',
        `  Date        : ${date}`,
        `  Time        : ${time} - ${endTime}`,
        `  Duration    : 30 minutes`,
        '',
        '-----------------------------------------------',
        `Booked on : ${new Date().toLocaleString('en-LK', { timeZone: TIME_ZONE })}`,
        '',
        'This is a system-generated confirmation. Please do not reply to this event.'
    ].join('\n');

    let calendarEvent;
    try {
        calendarEvent = await createEvent({
            summary            : eventSummary,
            description        : eventDescription,
            startTime          : startISO,
            endTime            : endISO,
            timeZone           : TIME_ZONE,
            extendedProperties : { doctorID }   // enables per-doctor conflict lookup
        });
        console.log('Google Calendar event created:', calendarEvent.id);
    } catch (calErr) {
        console.error('Google Calendar event creation failed:', calErr.message);
        // Calendar IS the source of truth — if creation fails, the booking did not happen.
        return res.status(500).json({
            error  : 'Slot is available but calendar booking failed. Please try again.',
            details: calErr.message
        });
    }
    // 

    res.status(201).json({
        message : 'Booking confirmed',
        booking : {
            doctorID,
            doctorName : doctorName || doctorID,
            date,
            startTime  : time,
            endTime,
            patientName,
            age, gender, contactNo, email, nic,
            status     : 'confirmed'
        },
        calendarEvent: {
            eventId  : calendarEvent.id,
            htmlLink : calendarEvent.htmlLink
        }
    });
});

// GET /doctors/search - Search all doctors
app.get('/doctors/search', (req, res) => {
    const { city, specialization, gender, isTele } = req.query;
    
    let filteredDoctors = [...doctors];
    
    if (city) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.hospitals.some(hospital => 
                hospital.address.city.toLowerCase() === city.toLowerCase()
            )
        );
    }
    
    if (specialization) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.specializations.some(spec => 
                spec.specialization.toLowerCase().includes(specialization.toLowerCase())
            )
        );
    }
    
    if (gender) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.gender.toLowerCase() === gender.toLowerCase()
        );
    }
    
    if (isTele !== undefined) {
        const teleValue = parseInt(isTele);
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.isTele === teleValue
        );
    }
    
    res.json(filteredDoctors);
});

// GET /doctors/:doctorID - Get specific doctor by ID
app.get('/doctors/:doctorID', (req, res) => {
    const { doctorID } = req.params;
    const doctor = doctors.find(d => d.doctorID === doctorID);
    
    if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
    }
    
    res.json(doctor);
});

// GET /doctors - Get all doctors
app.get('/doctors', (req, res) => {
    res.json(doctors);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        currentDate: formatDate(new Date())
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`\nAvailable endpoints:`);
    console.log(`  GET  /doctors/availability/slots`);
    console.log(`  GET  /doctors/availability/summary`);
    console.log(`  POST /doctors/availability/book`);
    console.log(`  GET  /doctors/search`);
    console.log(`  GET  /doctors/:doctorID`);
    console.log(`  GET  /doctors`);
    console.log(`  GET  /health`);
    console.log(`\nExample queries:`);
    console.log(`  When are cardiologists available today?`);
    console.log(`  → GET /doctors/availability/slots?specialization=Cardiology&date=today`);
    console.log(`  What are time slots for Dr. Cecelia Dare tomorrow?`);
    console.log(`  → GET /doctors/availability/slots?doctorName=Cecelia Dare&date=tomorrow`);
});

module.exports = app;       