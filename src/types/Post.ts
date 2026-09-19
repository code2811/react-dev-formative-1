// Shared shape for a single blog post used across PostList and Post components.
export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  // ISO 8601 timestamp, e.g. new Date().toISOString()
  datePosted: string;
}

// Returns the first `wordCount` words of a post's content, followed by an
// ellipsis if the content was truncated. Used to render the short preview
// required by the PostList component.
export function getPreview(content: string, wordCount = 8): string {
  const words = content.trim().split(/\s+/);
  if (words.length <= wordCount) {
    return content;
  }
  return `${words.slice(0, wordCount).join(' ')}...`;
}

// Returns true if the post was published within the last 24 hours, used to
// drive the conditional "New!" badge.
export function isNew(datePosted: string): boolean {
  const posted = new Date(datePosted).getTime();
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;
  return now - posted < oneDayMs;
}
