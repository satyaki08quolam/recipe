import './App.css';
import React,{useEffect, useState} from 'react';


import Header from './component/header/index.js'
import Main from './component/main';
import Footer from './component/footer';
import NameForm from './component/waste/formik';




function App() {
  const [text,setText]=useState('')
  const [add,setAdd]=useState([])
  const [filter,setFilter]=useState([])
  const [status,setStatus]=useState('all')
  const [count,setCount]=useState(0)
  
  
  const [info,setInfo]=useState([])


  useEffect(()=>{
    getLocal();
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocal();
  },[add,status])
  
  const filterHandler=()=>{
    switch(status){
      case 'active':
        setFilter(add.filter((o)=>
        o.check===true
        ))
        setCount(filter.length)
        break;
      case 'completed':
        setFilter(add.filter((o)=>o.check===false))
        setCount(filter.length)
        break;
      case 'clear all':
        setFilter([])
        setCount(filter.length)
        break;    
      case "all":
        setFilter(add)
        setCount(filter.length)
        break;
      default:
        console.log('not found')  
    }
  }
    
  const saveLocal=()=>{    
      localStorage.setItem('todos', JSON.stringify(add))
  }
  const getLocal=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal=JSON.parse(localStorage.getItem('todos'));
      setAdd(todoLocal)
    }
  }

  return (
    <div className="App">
      <div className='roots'>
        <Header  text={text} add={add} setText={setText} setAdd={setAdd} />
        <Main add={add} setAdd={setAdd} filter={filter} setFilter={setFilter} />
        <Footer setStatus={setStatus} setCount={setCount} count={count} />
      </div>
      <div className='mt-8 border-4'>
        <NameForm setInfo={setInfo} info={info} text={text} setText={setText} />
      </div>
    </div>
  );
}

export default App;
