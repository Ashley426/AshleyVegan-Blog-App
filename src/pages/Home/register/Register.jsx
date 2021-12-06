import "./register.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Register(){
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                    <label>Username</label>
                    <input type="text" className="registerInput" placeholder="Enter your username..." />
                    <label>Email</label>
                    <input type="text" className="registerInput" placeholder="Enter email...." />
                    <label>Password</label>
                    <input type="text" className="registerInput" placeholder="Enter your password.." />
                    <button className="registerLoginButton">
                        <Link to="/settings">Register</Link></button>
                    
                </form>
                <button className="registerRegisterButton">
                    <Link to="/">Login</Link></button>
            </div>
    )
}