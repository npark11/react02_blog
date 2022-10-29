import './register.css';

export default function Register() {
  return (
    <div className="register">
        <span className="register__title">Register</span>
        <form className="register__form">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <button className="register__button">Register</button>
        </form>
        <button className="register__login__button">Login</button>
    </div>
  )
}
