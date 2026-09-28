import {useState} from "react"
export default function Like() {
    let [isLiked,setIsLiked]=useState(false);
    let toggle=()=>{
        setIsLiked(!isLiked);
    };
    return(
    
    <p onClick={toggle}>
    {
    isLiked ? (<i className="fa-solid fa-heart" style={{color:"rgb(219, 38, 8)"}}></i>) : (<i className="fa-regular fa-heart"></i>)
    }
    </p>
    
)}