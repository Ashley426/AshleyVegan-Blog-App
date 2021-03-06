import "./sidebar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="" alt="" 
                
                />
                <p>Ashley Vegan is a place where you can find information on vegan recipe dishes and delicious vegan snacks!
                    Also share your vegan experiences with us as you learn about the journey of others. It can be tough finding
                    what to eat when making the decision to become vegan or vegetarian. Lets learn together!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul classNmae="sidebarList">
                    <li className="sidebarListItem">Vegan Desserts</li>
                    <li className="sidebarListItem">Recipes</li>
                    <li className="sidebarListItem">Upload your Vegan Dish</li>
                    <li className="sidebarListItem">Nutruitional Facts</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Contact Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="SidebarIcon fa-brands fa-twitter-square"></i>
                </div>
                <button className="settingsSubmit"><Link to="/Settings">Settings</Link></button>
            </div>
        </div>
    )
}