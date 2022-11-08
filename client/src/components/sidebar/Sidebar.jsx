import { useEffect, useState } from 'react';
import axios from 'axios';
import './sidebar.css';

export default function Sidebar() {
    const [cat, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[])

  return (
    <div className="sidebar">
        <div className="sidebar__item">
            <span className="sidebar__title">ABOUT ME</span>
            <img src="https://picsum.photos/id/777/300" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad voluptatum odio alias animi, non ullam voluptate voluptas officia veritatis, laudantium tempora sit vitae? Ea consectetur porro est a eligendi.</p>
        </div>
        <div className="sidebar__item">
            <span className="sidebar__title">CATEGORIES</span>
            <ul className="sidebar__list">
                {cat.map((c) => (
                    <li className="sidebar__list__item">{c.name}</li>
                ))}
            </ul>
        </div>
        <div className="sidebar__item">
            <span className="sidebar__title">FOLLOW US</span>
            <div className="sidebar__social">
                <i className="sidebar__icon fa-brands fa-square-facebook"></i>
                <i className="sidebar__icon fa-brands fa-square-twitter"></i>
                <i className="sidebar__icon fa-brands fa-square-pinterest"></i>
                <i className="sidebar__icon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
