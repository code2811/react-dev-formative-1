import { memo, type CSSProperties } from 'react';
import type { Post as PostType } from '../types/Post';
import { getPreview, isNew } from '../types/Post';
import './Post.css';

interface PostProps {
  post: PostType;
}

// This author's posts get the highlight.
const HIGHLIGHTED_AUTHOR = 'Frida';

function Post({ post }: PostProps) {
  // Highlight Frida's posts with an inline style.
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
        {/* The badge uses a class from Post.css. */}
        {isNew(post.datePosted) && <span className="post__badge">New!</span>}
      </div>
      <p className="post__meta">
        By {post.author} &middot; {formattedDate}
      </p>
      <p className="post__preview">{getPreview(post.content)}</p>
    </article>
  );
}

// memo keeps unchanged posts from re-rendering.
export default memo(Post);
