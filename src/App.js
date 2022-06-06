import './App.css';
import Form from './components/forms.js';
import React,{useEffect, useState} from 'react';
import Diary from './components/Lists/index.js';
import Phase1 from './components/header';


import Header from './component/header/index.js'
import Main from './component/main';
import Footer from './component/footer';




function App() {
  // const [data,setData]=useState('')
  // const [add,setAdd]=useState([])

  // const [status, setStatus]=useState("all");
  // const [filtering, setFiltering]=useState([])

  // useEffect(()=>{
  //   filterHandler();
  // },[add,status])
  
  // const filterHandler=()=>{
  //   switch(status){
  //     case 'completed':
  //       setFiltering(add.filter(a=>a.completed===true))
  //       break;
  //       case 'active':
  //         setFiltering(add.filter(a=>a.completed===false))
  //         break;
  //       // case 'clear completed':
  //       //   setFiltering(setAdd(''))
  //       //   break;
  //       default:
  //       setFiltering(add);
  //       break;
  //     }
  //   }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [text,setText]=useState('')
  const [add,setAdd]=useState([])
  const [filter,setFilter]=useState([])
  const [status,setStatus]=useState('all')
  const [count,setCount]=useState(0)


   
  useEffect(()=>{
    filterHandler();
  },[add,status])
  
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilter(add.filter((o)=>
        o.check===true
        ))
        console.log('completed===> ',filter)
        setCount(filter.length)
        break;
      case 'active':
        setFilter(add.filter((o)=>o.check===false))
        console.log('active==> ',filter)
        setCount(filter.length)
        break;
      case 'clear all':
        setFilter([])
        setCount(filter.length)
        break;    
      case "all":
        setFilter(add)
        console.log('all==> ',filter)
        setCount(filter.length)
        break;
      default:
        console.log('not found')  
    }
  }
    


  return (
    <div className="App">
      {/* <div className='border-2 grid'>
        <Form setDat={setData} add={add} setAdd={setAdd} data={data} setStatus={setStatus} />
        <Diary add={add} setAdd={setAdd} filtering={filtering}/>
        <Footer className="items-end" pass={data} setStatus={setStatus} />
      </div> */}
      <div>
        <Phase1 />
      </div>
      <div className='roots'>
        <Header  text={text} add={add} setText={setText} setAdd={setAdd} />
        <Main add={add} setAdd={setAdd} filter={filter} setFilter={setFilter} />
        <Footer setStatus={setStatus} setCount={setCount} count={count} />
      </div>
    </div>
  );
}

export default App;
