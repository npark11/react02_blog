import { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './singlePost.css';
import { Context } from '../../context/Context';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    }
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
        await axios.delete(`/posts/${post._id}`, {data: {username:user.username},
        });
        window.location.replace("/");
    } catch(err) {}
  };

  return (
    <div className="singlePost">
        <div className="singlePost__wrapper">
            {post.photo && (
                <img 
                    className="singlePost__img" 
                    src={PF + post.photo}
                    alt="" 
                />
            )} {
                updateMode ? <input type="text" value={post.title} /> : (
                <h1 className="singlePost__title">
                    {post.title}
                    {post.username === user?.username &&
                    <div className="singlePost__edit">
                        <i className="singlePost__icon fa-regular   fa-pen-to-square" onClick={()=>setUpdateMode  (true)}></i>
                        <i className="singlePost__icon fa-regular   fa-trash-can" onClick={handleDelete}></i>
                    </div>
                    }
                </h1>
                )
            }
            <div className="singlePost__info">
                <span className="singlePost__author">
                    Author:
                    <Link to={`/?user=${post.username}`} className="link">
                        <b>{post.username}</b>
                    </Link>
                </span>
                <span className="singlePost__date">{new Date(post.createdAt).toDateString}</span>
            </div>
            <p className="singlePost__desc">
                {post.desc}
            </p>
        </div>
    </div>
  )
}
