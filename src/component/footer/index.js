import React,{useState} from "react";





const Footer=({setStatus,setCount,count})=>{
    
    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }

    return(
        <div className="flex 2 w-9/12 mx-auto mt-8">
            <button value="all" onClick={statusHandler} className="border-2 border-amber-400 bg-fuchsia-500 uppercase p-2 rounded opacity-90 hover:opacity-100 focus:underline">all {count}</button>
            <button value="active" onClick={statusHandler} className="border-2 border-amber-400  bg-lime-400 uppercase p-2 opacity-90 rounded hover:opacity-100 focus:underline">completed {count}</button>
            <button value="completed" onClick={statusHandler} className="border-2 border-amber-400  bg-orange-400 uppercase p-2 opacity-90 rounded hover:opacity-100 focus:underline">active {count}</button>
            <button value="clear all" onClick={statusHandler} className='ml-auto border-2 border-amber-400 bg-teal-500 uppercase p-2 rounded opacity-90 hover:opacity-100 focus:underline'>clear all</button>
            
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