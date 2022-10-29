import './header.css';

export default function Header() {
  return (
    <div className="header">
        <div className="header__title">
            <span className="header__title_sm">React & Node</span>
            <span className="header__title_lg">Blog</span>
        </div>
        <img className="header__img" src="https://picsum.photos/id/257/1920/1080" alt="" />
    </div>
  )
}
