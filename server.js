const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample doctors data
const doctors = [
    {
        "doctorName": "Dr. Vanessa Brekke",
        "doctorID": "D7619",
        "gender": "Female",
        "slmcId": "95810",
        "isTele": 0,
        "hospitals": [
            {
                "hospitalId": "H18",
                "hospital": "Ninewells Hospital",
                "address": {
                    "city": "Kandy"
                }
            }
        ],
        "specializations": [
            {
                "specialization": "Pediatrics",
                "specializationId": "SPuS6"
            }
        ]
    },
    {
        "doctorName": "Dr. Cecelia Dare",
        "doctorID": "D7924",
        "gender": "Female",
        "slmcId": "92672",
        "isTele": 0,
        "hospitals": [
            {
                "hospitalId": "H77",
                "hospital": "Ninewells Hospital",
                "address": {
                    "city": "Colombo"
                }
            }
        ],
        "specializations": [
            {
                "specialization": "General Physician",
                "specializationId": "SPUaU"
            }
        ]
    },
    {
        "doctorName": "Dr. Newton Stamm",
        "doctorID": "D5399",
        "gender": "Female",
        "slmcId": "15684",
        "isTele": 1,
        "hospitals": [
            {
                "hospitalId": "H57",
                "hospital": "Ninewells Hospital",
                "address": {
                    "city": "Jaffna"
                }
            }
        ],
        "specializations": [
            {
                "specialization": "Pediatrics",
                "specializationId": "SPyLP"
            }
        ]
    },
    {
        "doctorName": "Dr. Osvaldo Leannon",
        "doctorID": "D1952",
        "gender": "Male",
        "slmcId": "66923",
        "isTele": 0,
        "hospitals": [
            {
                "hospitalId": "H15",
                "hospital": "Ninewells Hospital",
                "address": {
                    "city": "Jaffna"
                }
            }
        ],
        "specializations": [
            {
                "specialization": "Cardiology",
                "specializationId": "SPtUP"
            }
        ]
    },
    {
        "doctorName": "Dr. Gloria Hackett",
        "doctorID": "D6771",
        "gender": "Male",
        "slmcId": "61003",
        "isTele": 1,
        "hospitals": [
            {
                "hospitalId": "H86",
                "hospital": "Ninewells Hospital",
                "address": {
                    "city": "Kandy"
                }
            }
        ],
        "specializations": [
            {
                "specialization": "Oncology",
                "specializationId": "SPmuA"
            }
        ]
    }
];

// Sample availability data
// In a real application, this would come from a database
const availabilitySchedule = {
    "D7619": { // Dr. Vanessa Brekke - Pediatrics
        workingDays: [1, 2, 3, 4, 5], // Monday to Friday
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D7924": { // Dr. Cecelia Dare - Cardiology
        workingDays: [1, 2, 3, 4, 5, 6], // Monday to Saturday
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D5399": { // Dr. Newton Stamm - Pediatrics (Tele)
        workingDays: [1, 2, 3, 4, 5, 6, 0], // All days
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D1952": { // Dr. Osvaldo Leannon - Cardiology
        workingDays: [2, 4, 6], // Tuesday, Thursday, Saturday
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D6771": { // Dr. Gloria Hackett - Oncology (Tele)
        workingDays: [1, 3, 5], // Monday, Wednesday, Friday
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    }
};

// Sample bookings (to track which slots are taken)
// Format: "doctorID-date-time" => booking details
const bookings = {
    "D7924-2026-02-16-08:00": { patientName: "John Doe", status: "confirmed" },
    "D7924-2026-02-16-09:00": { patientName: "Jane Smith", status: "confirmed" },
    "D7619-2026-02-16-09:00": { patientName: "Bob Johnson", status: "confirmed" },
    "D1952-2026-02-17-09:00": { patientName: "Alice Brown", status: "confirmed" }
};

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
            matchingDoctors = matchingDoctors.filter(d => 
                d.doctorName.toLowerCase().includes(doctorName.toLowerCase())
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

// POST /doctors/availability/book - Book a slot (for testing purposes)
app.post('/doctors/availability/book', (req, res) => {
    const { doctorID, date, time, patientName } = req.body;
    
    if (!doctorID || !date || !time || !patientName) {
        return res.status(400).json({ 
            error: 'Missing required fields: doctorID, date, time, patientName' 
        });
    }
    
    const bookingKey = `${doctorID}-${date}-${time}`;
    
    if (bookings[bookingKey]) {
        return res.status(409).json({ 
            error: 'This slot is already booked',
            slot: { doctorID, date, time }
        });
    }
    
    bookings[bookingKey] = { 
        patientName, 
        status: 'confirmed',
        bookedAt: new Date().toISOString()
    };
    
    res.status(201).json({ 
        message: 'Booking confirmed',
        booking: {
            bookingKey,
            doctorID,
            date,
            time,
            patientName,
            status: 'confirmed'
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