import './navbar.css'

export default function Navbar() {
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
                <div className="navbar__list__item">HOME</div>
                <div className="navbar__list__item">ABOUT</div>
                <div className="navbar__list__item">CONTACT</div>
                <div className="navbar__list__item">WRITE</div>
                <div className="navbar__list__item">LOGOUT</div>
            </ul>
        </div>

        <div className="navbar__right">
            <img className="navbar__img" src="https://picsum.photos/200" alt="" />
            <i className="navbar__searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
