import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import './navbar.css'

export default function Navbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div className="navbar">
        <div className="navbar__left">
            <i className="navbar__icon fa-brands fa-square-facebook"></i>
            <i className="navbar__icon fa-brands fa-square-twitter"></i>
            <i className="navbar__icon fa-brands fa-square-pinterest"></i>
            <i className="navbar__icon fa-brands fa-square-instagram"></i>
        </div>

        <div className="navbar__center">
            <ul className="navbar__list">
                <div className="navbar__list__item"><Link className="link" to="/">HOME</Link></div>
                <div className="navbar__list__item"><Link className="link" to="/">ABOUT</Link></div>
                <div className="navbar__list__item"><Link className="link" to="/">CONTACT</Link></div>
                <div className="navbar__list__item"><Link className="link" to="/write">WRITE</Link></div>
                <div className="navbar__list__item" onClick={handleLogout}>{user && "LOGOUT"}</div>
            </ul>
        </div>

        <div className="navbar__right">
            {user ? (
            <Link to="/settings">
                <img 
                    className="navbar__img" 
                    src="https://picsum.photos/id/660/100/100"
                    alt="" 
                    />
            </Link>
            ) : (
                <ul className="navbar__list">
                    <li className="navbar__list__item">
                        <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="navbar__list__item">
                        <Link className="link" to="/register">REGISTER</Link>
                    </li>
                </ul>
            )}
            
            <i className="navbar__searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
