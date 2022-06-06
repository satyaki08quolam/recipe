import React from 'react'
import Form from '../forms'


const Lists=({text, add, setAdd,L})=>{
    const deleteHandler=()=>{
        setAdd(add.filter((el)=>el.id!==L.id))
    }
    const completedHandler=()=>{
        setAdd(add.map((item)=>{
            console.log('these are the items',add)
            if(item.id === L.id){
                console.log('if is running')
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div>
            <li className='bg-violet-200 flex gap-4 p-2 items-center select-none'>
                <label className='flex '><input type='checkbox' onChange={completedHandler} className={`${L.completed? "opacity-75 line-through":''}`}/></label><div className={`${L.completed? "opacity-75 line-through":''}`}>{text}</div>
                <div onClick={deleteHandler} className='ml-auto text-xs uppercase cursor-pointer text-red-900 font-black'>delete</div>
            </li>
        </div>
    )
}


const Diary=({add,setAdd,filtering})=>{
    return(
        <div>
            <ul className='grid gap-4 w-11/12 mx-auto'>
                {filtering.map((L)=>(
                    <Lists text={L.text} key={L.id} add={add} setAdd={setAdd} L={L} />
                ))}
            </ul>

        </div>
    )
}

export default Diary