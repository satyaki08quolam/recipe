import {useContext} from 'react'
import {createContext,useReducer} from 'react'


function Footer({pass, setStatus}){

    const statusHandler=(e)=>{
        console.log('we clicked on ==>',e.target.textContent)
        setStatus(e.target.textContent)
    }

    console.log('got the ',pass)
    return(
        <div className="bg-slate-600 rounded grid items-center">
            <ul className="w-11/12 mx-auto p-4 flex justify-center gap-8">
                <li className="basis-9/12">
                    <span className="border rounded p-2 w-full inline-block uppercase">
                        items added : {pass}
                    </span>
                </li>
                <li className="basis-4/12">
                    <button onClick={statusHandler} className="rounded p-2 w-full uppercase bg-lime-500 opacity-90 hover:opacity-100">all</button>
                </li>
                <li className="basis-4/12">
                    <button onClick={statusHandler} className="rounded p-2 w-full uppercase bg-red-500 opacity-90 hover:opacity-100">active</button>
                </li>
                <li className="basis-4/12">
                    <button onClick={statusHandler} className="rounded p-2 w-full uppercase bg-indigo-500 opacity-90 hover:opacity-100">completed</button>
                </li>
                <li className="basis-4/12">
                    <button onClick={statusHandler} className="rounded p-2 uppercase w-full bg-cyan-500 opacity-90 hover:opacity-100">clear completed</button>
                </li>
            </ul>
        </div>
    )
}




export default Footer