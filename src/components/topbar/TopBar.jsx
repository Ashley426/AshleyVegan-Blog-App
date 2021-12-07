
import "./topbar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

 export default function TopBar(){
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-instagram-square"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/Login">Log In</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/Register">Register</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/Write">Write</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    className="topImg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJEbNBW7WgMiqHuSO0OPtl8yxP218c-U-4Q&usqp=CAU"
                    alt=""
                />
                <i className="topSearchIcon fa-brands fa-searchengin"></i>
            </div>
        </div>
     )
 }