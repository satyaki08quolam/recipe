import React from 'react'




const Form=({setDat,add,setAdd,data})=>{
    const inputHandler=(e)=>{
        console.log(e.target.value)
        setDat(e.target.value)
    }
    const stopRefresh=(e)=>{
        e.preventDefault()
        setAdd([
            ...add,{text:data,completed:false, id:Math.random()*1000}
        ])
        setDat('')
    }

    return(
        <form className='grid items-center justify-center'>
            <div className='border-4 border-yellow-500 flex gap-4 rounded'>
                <input value={data} type="text" onChange={inputHandler} className='outline-none p-2' />
                <button onClick={stopRefresh} type="submit" className='uppercase p-2'>add</button>
            </div>
        </form>
    )
}


export default Form;