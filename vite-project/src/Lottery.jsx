import {useState} from "react";
import { genTicket ,sum} from "./helper";
import "./lottery.css"
import Ticket from "./Ticket.jsx"

export default function Lottery({n,winningSum}){
    let [ticket,setTicket]=useState(genTicket(3));
    let isWinning=sum(ticket)==winningSum
    let newTicket=()=>{
        setTicket(genTicket(n))
    }
    return <div>Lottery Game
        <Ticket ticket={ticket}/>
        <button onClick={newTicket}>Buy new Ticket</button>
        <div>{isWinning && "Congrats,You won !!"}</div></div>

}