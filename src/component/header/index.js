import React from "react";


const Header=({text,setText,setAdd,add})=>{

    const changeText=(e)=>{
        setText(e.target.value)
    }

    const addHandler=(e)=>{
        // to stop refresh
        e.preventDefault()
        setAdd([
            ...add,{text:text,check:false,id:Math.random()*1000},
        ])
        setText('')
    }
    
    return(
        <div>
            <form className="w-10/12 mx-auto flex justify-center m-4">
                <div className="border-2 border-teal-900 rounded">
                    <input onChange={changeText} value={text} className="outline-none px-4" />
                    <button onClick={addHandler} type="submit" className="uppercase bg-slate-700 py-2 px-4 rounded text-lime-400 font-normal opacity-95 hover:opacity-100">add</button>
                </div>
            </form>
        </div>
    )
}


export default Header