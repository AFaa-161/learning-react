import {useState} from "react";

export default function Ludo(){
    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});

    let blueMoves=()=>{
        console.log("btn clicked");
        setMoves((prev)=>{
            console.log("prev:",prev);
            return {...prev,blue:prev.blue+1};
        });
    }
    let greenMoves=()=>{
        setMoves((prev)=>{
            return {...prev,green:prev.green+1};
        });
    }
    let redMoves=()=>{
        setMoves((prev)=>{
            return {...prev,red:prev.red+1};
        });
    }
    let yellowMoves=()=>{
        setMoves((prev)=>{
            return {...prev,yellow:prev.yellow+1};
        });
    }


    return(
        <>
        <p>Blue moves:{moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={blueMoves}>+1</button>
        <p>Yellow moves:{moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={yellowMoves}>+1</button>
        <p>Green moves:{moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={greenMoves}>+1</button>
        <p>Red moves:{moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={redMoves}>+1</button>
        </>
    )
}