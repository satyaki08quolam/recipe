import React,{useState} from "react";





const Footer=({setStatus,setCount,count})=>{
    
    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }

    return(
        <div className="flex gap-8">
            {/* <button onClick={statusHandler}>all {count}</button>
            <button onClick={statusHandler}>completed{count}</button>
            <button onClick={statusHandler}>active {count}</button>
            <button onClick={statusHandler} className='ml-auto'>clear all</button> */}
            <select onChange={statusHandler} name="todos" className="">
                <option value="all">all {count}</option>
                <option value="active">active {count}</option>
                <option value="completed">completed {count}</option>
                <option value="clear all">clear all</option>
            </select>
        </div>
    )
}




export default Footer