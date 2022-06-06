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
            <form>
                <input onChange={changeText} value={text} />
                <button onClick={addHandler} type="submit">add</button>
            </form>
        </div>
    )
}


export default Header