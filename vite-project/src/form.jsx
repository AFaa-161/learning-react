import {useState} from "react";

export default function Forms(){
    let [input,setInput]=useState({fullName:"",userNmae:""})
    let handleInput=(event)=>{
        setInput ((curr)=>{
            return {...curr,[event.target.name]:event.target.value}
    })
}
    let handleSubmit=(event)=>{
        event.preventDefault();
        setInput({fullName:"",userName:""})
    }

    return(<form onSubmit={handleSubmit}>
        <label htmlFor="fullName">ENTER NAME</label>&nbsp;&nbsp;
        <input placeholder="name?" value={input.fullName} onChange={handleInput} id="fullName" name="fullName"></input><br />
        <label htmlFor="userName">ENTER USERNAME</label>&nbsp;&nbsp;
        <input type="text" placeholder="username ?" value={input.userName} onChange={handleInput} id="userName" name="userName"/>
        <button>SUBMIT</button>
    </form>
    )
}