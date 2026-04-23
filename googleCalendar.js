const { google } = require('googleapis');
require('dotenv').config();

const CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH || './credentials.json';
const CALENDAR_ID      = process.env.CALENDAR_ID || 'primary';
const TIME_ZONE        = 'Asia/Colombo';

const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events'
    ],
});

const calendar = google.calendar({ version: 'v3', auth });

/**
 * Fetch all calendar events for a specific doctor on a specific date.
 * Events must have been created with extendedProperties.private.doctorID set.
 *
 * @param {string} doctorID - The doctor's ID (e.g. 'D0111')
 * @param {string} date     - Date in YYYY-MM-DD format
 * @returns {Promise<Array>} List of Google Calendar event objects
 */
async function getEventsForDoctorOnDate(doctorID, date) {
    try {
        // Build full-day window in Asia/Colombo (UTC+5:30)
        const timeMin = new Date(`${date}T00:00:00+05:30`).toISOString();
        const timeMax = new Date(`${date}T23:59:59+05:30`).toISOString();

        const response = await calendar.events.list({
            calendarId             : CALENDAR_ID,
            timeMin,
            timeMax,
            singleEvents           : true,
            orderBy                : 'startTime',
            // Filter to only this doctor's events
            privateExtendedProperty: `doctorID=${doctorID}`
        });

        return response.data.items || [];
    } catch (error) {
        console.error('Error fetching calendar events for doctor:', error);
        throw error;
    }
}

/**
 * Get upcoming events from the calendar (generic, unfiltered).
 * @param {number} maxResults
 * @returns {Promise<Array>}
 */
async function getAvailableEvents(maxResults = 10) {
    try {
        const response = await calendar.events.list({
            calendarId  : CALENDAR_ID,
            timeMin     : new Date().toISOString(),
            maxResults,
            singleEvents: true,
            orderBy     : 'startTime',
        });
        return response.data.items || [];
    } catch (error) {
        console.error('Error fetching calendar events:', error);
        throw error;
    }
}

/**
 * Create a new event in Google Calendar.
 *
 * @param {Object} eventDetails
 * @param {string} eventDetails.summary              - Event title
 * @param {string} eventDetails.description          - Event body text
 * @param {string} eventDetails.startTime            - Local datetime string e.g. '2026-04-07T10:00:00'
 * @param {string} eventDetails.endTime              - Local datetime string e.g. '2026-04-07T10:30:00'
 * @param {string} [eventDetails.timeZone]           - IANA timezone (default: 'Asia/Colombo')
 * @param {Object} [eventDetails.extendedProperties] - Key-value pairs stored as private extended properties
 *                                                     (queryable via privateExtendedProperty filter)
 * @returns {Promise<Object>} Created event data from Google Calendar
 */
async function createEvent(eventDetails) {
    const {
        summary,
        description,
        startTime,
        endTime,
        timeZone = TIME_ZONE,
        extendedProperties = {}
    } = eventDetails;

    const event = {
        summary,
        description,
        start: { dateTime: startTime, timeZone },
        end:   { dateTime: endTime,   timeZone },
        // Stored privately so they can be used to filter events per-doctor
        extendedProperties: {
            private: extendedProperties
        }
    };

    try {
        const response = await calendar.events.insert({
            calendarId: CALENDAR_ID,
            resource  : event,
        });
        return response.data;
    } catch (error) {
        console.error('Error creating calendar event:', error);
        throw error;
    }
}

module.exports = {
    getAvailableEvents,
    getEventsForDoctorOnDate,
    createEvent
};
