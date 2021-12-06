import "./post.css"
import { Link } from "react-router-dom"

export default function Post(props){
    return (
        <div className="post">
            <img className="postImg" src={props.src} alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Fun Facts</span>
                    <span className="postCat">Vegan Experiences</span>
                </div>
                <span className="postTitle">
                    {props.postTitles}
                </span>
                <hr />
                <span className="postDate">{props.postDate}</span>
            </div>
            <p className="postDescr">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum quisquam, suscipit laboriosam quasi incidunt obcaecati laborum? */}
                {props.postDesc}
            </p>
        </div>
    )
}