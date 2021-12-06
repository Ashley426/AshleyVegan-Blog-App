import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Settings(){
    
    return(
        
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsUpdateTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://avatars.githubusercontent.com/u/89093473?v=4" alt=""
                        
                        />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Ashley"/>
                    <label>Email</label>
                    <input type="text" placeholder="@gmail.com"/>
                    <label>Password</label>
                    <input type="text" placeholder="Password"/>
                    <button className="settingsSubmit">
                        <Link to="/">Update</Link></button>
                </form>
            </div>
            <Sidebar />
    
        </div>
    )
}