import "./singlePost.css";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function SinglePost(props){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
              
                <img className="singlePostImg" src="https://rachlmansfield.com/wp-content/uploads/2021/08/IMG_6900-768x1024.jpg" alt="" 
                
                />
                <h1 className="singlepostImg">
                    vegan CHICKPEA SALAD SANDWICH!
                    {props.singlepostImg}
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-delete-left"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ashley</b></span>
                    <span className="singlePostDate"> 2 hours ago</span>
                </div>
                <p className="singlePostDesc">{props.singlepostDesc}
                    Can chickpeas, rinsed and washed
                    Vegan mayo of choice
                    Dijon mustard
                    Bell pepper
                    Garlic powder, onion powder
                    Sea salt and black pepper to taste
                    Cilantro, chopped and stems removed
                    Sandwich add-in ideas: bread of choice (I usually use sourdough), dijon mustard, avocado, pickled onions, lettuce, tomato, anything!
                </p>
            </div>
            <Sidebar/>
        </div>
    )
}