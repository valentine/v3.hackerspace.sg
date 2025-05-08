import ical from 'ical';
import { iCalUrl } from '@/config.index';

export interface CalendarEvent {
  summary: string;
  start: Date;
  end: Date;
  description?: string;
  url?: string;
}

export function parseICS(data: string): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const parsedData = ical.parseICS(data);

  for (const key in parsedData) {
    const event = parsedData[key];
    if (event.type === 'VEVENT') {
      events.push({
        summary: event.summary || 'No Title',
        start: event.start ? new Date(event.start) : new Date(),
        end: event.end ? new Date(event.end) : new Date(),
        description: event.description || '',
      });
    }
  }

  return events;
}

export async function fetchAndParseEvents(): Promise<CalendarEvent[]> {
  try {
    const res = await fetch(iCalUrl);
    if (!res.ok) {
      console.error('Failed to fetch ical file.');
      return [];
    }
    const icalData = await res.text();
    return parseICS(icalData);
  } catch (error) {
    console.error('Error fetching or parsing the ical file:', error);
    return [];
  }
}

export function filterPastEventsByYear(events: CalendarEvent[], year: string): CalendarEvent[] {
  const yearStart = new Date(parseInt(year), 0, 1);
  const yearEnd = new Date(parseInt(year), 11, 31, 23, 59, 59);
  
  return events
    .filter(event => {
      const eventDate = new Date(event.start);
      return eventDate >= yearStart && eventDate <= yearEnd;
    })
    .sort((a, b) => a.start.getTime() - b.start.getTime()); // Chronological order
}

export function filterUpcomingEvents(events: CalendarEvent[]): CalendarEvent[] {
  const now = new Date();
  return events
    .filter(event => event.start > now)
    .sort((a, b) => a.start.getTime() - b.start.getTime()); // Chronological order
}
