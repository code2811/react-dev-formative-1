import type { Post as PostType } from '../types/Post';
import Post from './Post';
import './PostList.css';

// Sample data for the assessment. The first post shows the new badge.
const samplePosts: PostType[] = [
  {
    id: 1,
    title: 'Getting Started with Vite + TypeScript',
    author: 'Frida',
    content:
      'Vite gives you a lightning-fast dev server and a build setup that just works out of the box for React and TypeScript projects.',
    datePosted: new Date().toISOString(), // right now -> triggers "New!" badge
  },
  {
    id: 2,
    title: 'Why We Chose Functional Components',
    author: 'Ikirezi',
    content:
      'Hooks made functional components powerful enough to replace class components for almost everything we build day to day.',
    datePosted: '2026-09-10T09:00:00.000Z',
  },
  {
    id: 3,
    title: 'A Quick Guide to Conditional Styling',
    author: 'Jules',
    content:
      'Whether it is an inline style object or a toggled class name, conditional styling is how your UI reacts to data.',
    datePosted: '2026-09-05T14:30:00.000Z',
  },
];

function PostList() {
  return (
    <section className="post-list">
      {samplePosts.map((post) => (
        // Use the post id instead of the array index.
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
