import React from "react"



const Form1=({setFeed1,feed1,setPage1,page1})=>{

    const handleInData=(e)=>{
        setFeed1(e.target.value)
    }

    const addHandler=(e)=>{
        // to stop refresh
        e.preventDefault()
        setPage1((prevValue)=>{
            return [...prevValue,feed1]
        })
        setFeed1('')
    }

    return(
        <form className="flex">
            <input type="text" value={feed1} onChange={handleInData} className='outline-none' />
            <button onClick={addHandler} className="border-4 border-teal-500 rounded-full w-12 h-12 bg-cyan-400 text-white text-[1.5rem] font-bold flex items-center justify-center opacity-80 hover:opacity-100">+</button>
        </form>
    )
}


export default Form1