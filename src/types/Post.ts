// Shared post shape.
export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  // Stored as an ISO timestamp.
  datePosted: string;
}

// Shorten the post for the card preview.
export function getPreview(content: string, wordCount = 8): string {
  const words = content.trim().split(/\s+/);
  if (words.length <= wordCount) {
    return content;
  }
  return `${words.slice(0, wordCount).join(' ')}...`;
}

// Used to decide whether to show the "New!" badge.
export function isNew(datePosted: string): boolean {
  const posted = new Date(datePosted).getTime();
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;
  return now - posted < oneDayMs;
}
