// useState() : react hooks활용

import { useState } from "react";

const State=()=>{
    const [param1, setParam1]=useState("초기값");
    const [param2, setParam2]=useState("");
    const func1=()=>{
        setParam1("안녕!")
    }
    const func2=()=>{
        setParam1("초기값")
    }
    const textInput=(e)=>{
        // console.log(e);
        // console.log(e.target.value)
        const {name, value}=e.target;
        console.log(name,value)
        setParam2(value)
    }
    return(
        <>
            <div className="page state">
                <h2>State.jsx</h2>
                <p>{param1}</p>
                <button onClick={func1}>버튼</button>
                <button onClick={func2}>초기화</button>
                <input type="text" onChange={textInput} name="param2"/>
                <p>입력값 : {param2}</p>
            </div>
        </>
    )
}

/* function State(){
    return(
        <>
            <div className="page state">
                <h2>State.jsx</h2>
                
            </div>
        </>
    )
} */

export default State;

/* export default function Info(){
    return(
        <>
            <div className="page state">
                <h2>State.jsx</h2>
                
            </div>
        </>
    )
} */