import React from "react";
import "./login.css";
import {authentication} from "../../firebase-config";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
export default function Login(){
        
        return(
            <div className="login">
                <span className="LoginTitle">Login</span>
                    <form className="registerForm">
                        <label>Email</label>
                        <input type="text" className="loginInput" placeholder="Enter Email"/>
                        
                        <label>Password</label>
                        <input type="password" className="loginInput" placeholder="Enter Password" />
                        
                        <button type="submit" className="loginButton">
                            <Link to="/">Login</Link></button>
                    </form>
                    <button type="submit" className="LoginRegisterButton">
                        <Link to="/Register">Register</Link></button>
            </div>
        )

   }


    
