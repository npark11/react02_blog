import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img 
          className="post__img" 
          src={PF + post.photo}
          alt="" 
        />
      )}
        <div className="post__info">
          <div className="post__cats">
            {post.categories.map((c) => (
              <span className="post__cat">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="post__title">{post.title}</span>
          </Link>
          <hr />
          <span className="post__date">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="post_desc">
          {post.desc}
        </p>
    </div>
  )
}
