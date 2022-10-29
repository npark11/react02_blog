import './login.css';

export default function Login() {
  return (
    <div className="login">
        <span className="login__title">Login</span>
        <form className="login__form">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <button className="login__button">Login</button>
        </form>
        <button className="login__register__button">Register</button>
    </div>
  )
}
