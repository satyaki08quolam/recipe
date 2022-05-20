import React from "react"
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from "react-router-dom"


function Search(){

    const [input, setInput]=useState('')
    const navigate=useNavigate();
    
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+input)
    }

    return(
        <form onSubmit={submitHandler} className="mx-80 my-4 bg-gradient-to-r from-[#494949] to-[#313131] rounded-2xl">
            <div className="flex gap-2">
                <FaSearch className="basis-[3%] rounded-2xl h-auto mx-2 cursor-pointer"></FaSearch>
                <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} className="border-2 border-green-400 py-4 rounded-2xl text-[1.5rem] bg-gradient-to-r from-[#494949] to-[#313131] outline-0 w-full basis-[100%] border-none"/>
            </div>
        </form>
    )
}



export default Search;