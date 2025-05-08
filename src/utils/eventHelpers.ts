import { formatDistanceToNow } from 'date-fns';
import { categoryMap } from '@/config.index';
import { excludedEvents, eventIconMap } from '@/config.events';

export function formatSGTDateTime(date: Date) {
  const dateString = new Date(
    date.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }),
  ).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const timeString = new Date(
    date.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }),
  ).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return `${dateString}, ${timeString} SGT`;
}

export function isTentative(title: string): boolean {
  return title.toLowerCase().includes('(tentative)');
}

export function isExcludedEvent(summary: string): boolean {
  return excludedEvents.some(excluded =>
    summary.toLowerCase().includes(excluded.toLowerCase())
  );
}

function findCategoryMatch(text: string | undefined): string | undefined {
  if (!text) return undefined;

  return Object.keys(categoryMap).find((key) =>
    text.toLowerCase().includes(key.toLowerCase()),
  );
}

function findIconMatch(text: string | undefined): string | undefined {
  if (!text) return undefined;

  return Object.keys(eventIconMap).find((key) =>
    text.toLowerCase().includes(key.toLowerCase()),
  );
}

export function getEmoji(
  summary: string,
  description: string | undefined,
): string {
  // First try to match category for backward compatibility
  let matchedCategory: string | undefined;
  const categoryMatch = description?.match(/Category:\s*([^\n]+)/i);

  if (categoryMatch) {
    const category = categoryMatch[1].trim();
    matchedCategory = Object.keys(categoryMap).find(
      (key) => key.toLowerCase() === category.toLowerCase(),
    );
  }

  if (!matchedCategory) {
    matchedCategory = findCategoryMatch(summary);
  }

  if (!matchedCategory) {
    matchedCategory = findCategoryMatch(description);
  }

  if (matchedCategory) {
    return categoryMap[matchedCategory] || '';
  }

  // If no category match, try to match event type for icon
  let matchedIcon: string | undefined;
  matchedIcon = findIconMatch(summary);

  if (!matchedIcon) {
    matchedIcon = findIconMatch(description);
  }

  return matchedIcon ? eventIconMap[matchedIcon] || '' : '';
}

export function updateRelativeTimes() {
  const eventTimes = document.querySelectorAll('.event-relative-time');
  eventTimes.forEach((element) => {
    const startTime = new Date(element.getAttribute('data-start-time')!);
    const relativeTime = formatDistanceToNow(startTime, { addSuffix: true });
    element.textContent = relativeTime;
  });
}
