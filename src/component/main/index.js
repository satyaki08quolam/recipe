import React,{useState} from "react";



const Main=({add,filter,setAdd,setFilter})=>{
    return(
        <div>
            <ul className="grid gap-4 w-9/12 mx-auto">
                {filter.map((a)=>(
                    <Lists text={a.text} key={a.id} setAdd={setAdd} add={add} a={a} />
                ))}
            </ul>
        </div>
    )
}




const Lists=({text,setAdd,add,a})=>{

    const deleteHandler=()=>{
        setAdd(add.filter(o=>o.id!==a.id))
    }
    
    const cutHandler=(e)=>{
        setAdd(add.map((item)=>{
            if(item.id===a.id){
                return{
                    ...item, 
                    check: !item.check,
                }
            }
            return item;
          }))
        }
    
    return(
        <div>
            <li className="bg-stone-400 flex p-4 uppercase gap-4 items-center rounded">
                <input type="checkbox" onClick={cutHandler} className={`${a.check? `cursor-pointer`: ''}`} />
                <p className={`${a.check? "line-through": ''}`}>{a.text}</p>
                <span onClick={deleteHandler} className='ml-auto cursor-pointer text-red-900 font-black'>&#x2715;</span>
            </li>
        </div>                
    )
}

export default Main