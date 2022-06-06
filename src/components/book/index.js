import React from "react";
import Items from "./Items";




const Book=({page1,setPage1,pure,setPure})=>{
    console.log(page1)
    return(
        <div>
            <ul className="grid gap-4">
                {page1.map((p,index)=>{
                    return(
                        <Items text={p} key={index} page1={page1} setPage1={setPage1} p={p} pure={pure} setPure={setPure} />
                    ) 
                })}
            </ul>
        </div>
    )
}


export default Book;