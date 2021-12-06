import "./write.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Write(){
    return(
        <div className="writeImg">
            <img src="https://rachlmansfield.com/wp-content/uploads/2021/12/IMG_1289-scaled-480x620.jpg" alt=""
            />


            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-circle-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" id="Title" classsName="writeInput" autoFocus={true}/>

                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell me about your exper...." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}