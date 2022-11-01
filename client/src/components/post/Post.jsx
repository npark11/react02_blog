import './post.css';

export default function Post() {
  return (
    <div className="post">
        <img className="post__img" src="https://picsum.photos/800/400" alt="" />
        <div className="post__info">
          <div className="post__cats">
            <span className="post__cat">Music</span>
            <span className="post__cat">Life</span>
          </div>
          <span className="post__title">Lorem ipsum dolor sit amet</span>
          <hr />
          <span className="post__date">1 hour ago</span>
        </div>
        <p className="post_desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ex asperiores veniam illum repudiandae mollitia, nemo quas. Unde dolores voluptatum iusto dolore sit. Numquam, aliquid. Culpa in et non unde.consectetur adipisicing elit. Necessitatibus ex asperiores veniam illum repudiandae mollitia, nemo quas. Unde dolores voluptatum iusto dolore sit. Numquam, aliquid. Culpa in et non unde.consectetur adipisicing elit. Necessitatibus ex asperiores veniam illum repudiandae mollitia, nemo quas. Unde dolores voluptatum iusto dolore sit. Numquam, aliquid. Culpa in et non unde.</p>
    </div>
  )
}
