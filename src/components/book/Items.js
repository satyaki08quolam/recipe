import React, { useState } from "react";

const Items = ({ text, setPage1, page1, p, pure, setPure }) => {
  const [line, setLine] = useState(false);

  const slashedHandler = (e) => {
    // console.log(e.target.value);
    // setLine(e.target.value=!lined)

    // function great(accu,curr){
    //     accu=[]
    //     if(curr===p){
    //         setLine(!line)
    //         console.log('curr',curr)
    //     }
    //     console.log('accu ',accu=accu.push(curr)) ;
    //     return accu
    // }

    // setPure(page1.reduce(great))

    // function filtering(x){
    //     if(p===x){
    //         setLine(!line)
    //         console.log(p)
    //         return p
    //     }
    // }

    // setPure(page1.filter((val)=>{
    //     if(p===val){
    //         setLine(!line)
    //         console.log(p)
    //         return p
    //     }
    // }))

    // const allFilteredData = (datas) => {
    //   datas.filter((val) => val === text);
    // };
    // setPure({ ...pure, allFilteredData(page1) });
    // setPure(
    //   page1.filter((val) => {
    //     if (val === text) {
    //       setLine(!line);
    //       return val;
    //     }
    //     return false;
    //   })
    // );
  };



  return (
    <div>
      <li className="flex gap-4 bg-stone-300 p-4">
        <label>
          <input type="checkbox" onClick={slashedHandler} />
        </label>
        <p className={line ? "line-through" : ""}>{text}</p>
        <button className="ml-auto">delete</button>
      </li>
    </div>
  );
};

export default Items;
