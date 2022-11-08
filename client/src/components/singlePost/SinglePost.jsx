import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './singlePost.css';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        }
        getPost()
    }, [path]);

  return (
    <div className="singlePost">
        <div className="singlePost__wrapper">
            {post.photo && (
                <img 
                    className="singlePost__img" 
                    src={post.photo}
                    alt="" 
                />
            )}
            <h1 className="singlePost__title">{post.title}
                <div className="singlePost__edit">
                    <i className="singlePost__icon fa-regular fa-pen-to-square"></i>
                    <i className="singlePost__icon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePost__info">
                <span className="singlePost__author">Author: <b>{post.username}</b></span>
                <span className="singlePost__date">{new Date(post.createdAt).toDateString}</span>
            </div>
            <p className="singlePost__desc">
                {post.desc}
            </p>
        </div>
    </div>
  )
}
