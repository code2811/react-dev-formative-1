import { memo, type CSSProperties } from 'react';
import type { Post as PostType } from '../types/Post';
import { getPreview, isNew } from '../types/Post';
import './Post.css';

interface PostProps {
  post: PostType;
}

// Author whose posts get a highlighted background. In a real app this might
// come from the logged-in user's preferences or a "featured author" flag.
const HIGHLIGHTED_AUTHOR = 'Jane Doe';

function Post({ post }: PostProps) {
  // Conditional styling method #1: inline style, computed per-render based
  // on the post's author.
  const cardStyle: CSSProperties = {
    backgroundColor: post.author === HIGHLIGHTED_AUTHOR ? '#fff4d6' : '#ffffff',
  };

  const formattedDate = new Date(post.datePosted).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="post" style={cardStyle}>
      <div className="post__header">
        <h3 className="post__title">{post.title}</h3>
        {/* Conditional styling method #2: a CSS class toggled by a boolean,
            via the external Post.css stylesheet. */}
        {isNew(post.datePosted) && <span className="post__badge">New!</span>}
      </div>
      <p className="post__meta">
        By {post.author} &middot; {formattedDate}
      </p>
      <p className="post__preview">{getPreview(post.content)}</p>
    </article>
  );
}

// Optimization: React.memo skips re-rendering a Post whose props haven't
// changed, which matters once PostList re-renders for reasons unrelated to
// a specific post (e.g. a future "add post" feature).
export default memo(Post);
