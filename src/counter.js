import React,{useState} from "react";
let count2=0
let Counter=()=>{
    let [count,setcount]=useState(0)
    ++count2;
 function updatecount(){
    setcount(count+1);
 }
    return(
        <div><div> hi i am counter{count}and{count2}</div>
        <button onClick={updatecount}>count</button>
        </div>
    )
}


export default Counter;