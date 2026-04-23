const { getAvailableEvents, createEvent } = require('./googleCalendar');

async function testCalendar() {
    console.log('--- Testing Google Calendar Integration ---');

    try {
        // 1. Test Fetching Events
        console.log('\n1. Fetching available events...');
        const events = await getAvailableEvents(5);
        
        if (events && events.length > 0) {
            console.log(`Found ${events.length} upcoming events:`);
            events.forEach((event, i) => {
                const start = event.start.dateTime || event.start.date;
                console.log(`  ${i + 1}. ${event.summary} (${start})`);
            });
        } else {
            console.log('No upcoming events found.');
        }

        // 2. Test Creating an Event
        console.log('\n2. Creating a test event...');
        
        // Creating an event starting 1 hour from now, for 1 hour duration
        const now = new Date();
        const startTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour after start
        
        const newEventDetails = {
            summary: 'Doctor Appointment API Test',
            description: 'This is a test event created by our custom Google Calendar function.',
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Colombo'
        };

        const createdEvent = await createEvent(newEventDetails);
        console.log('Successfully created event!');
        console.log(`Event ID: ${createdEvent.id}`);
        console.log(`Event Link: ${createdEvent.htmlLink}`);

    } catch (error) {
        console.error('\n❌ Test failed! Error details:');
        console.error(error.message);
        
        if (error.message.includes('No key or keyFile set')) {
            console.log('\n💡 FIX: Please make sure you have placed your "credentials.json" file in the APIs_for_Agent directory.');
        }
    }
}

testCalendar();
