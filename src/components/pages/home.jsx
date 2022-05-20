import React, { useEffect ,useState} from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import {NavLink} from 'react-router-dom'

function Home() {
  return (
    <div className='grid gap-4'>
        <Veggie />
        <PopularPicks />
    </div>
  )
}


// popular picks starts here +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function PopularPicks(){

    const [popular,setPopular]=useState([])

    useEffect(()=>{
        getPopular()
    },[])

    const getPopular=async()=>{
        const check=localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check))
        }else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10`)
            const data=await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            console.log(JSON.stringify(data.recipes))
            console.log(data)
            setPopular(data.recipes)
        }
    }
    return(
        <div className='w-10/12 mx-auto'>
            <h3 className='capitalize py-4 text-black font-bold text-[2rem]'>popular picks</h3>
            <Splide options={{
                perPage:4,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:'3rem'
            }}>
                {popular.map((p)=>{
                    return(
                        <SplideSlide key={p.id} className="opacity-70 hover:opacity-100 cursor-pointer">
                            <div className="relative min-h-[25rem] opacity-90">
                                <p className='absolute z-10	left-2/4 bottom-0 translate-x-[-50%] w-full text-center font-semibold text-[1rem] h-2/5 flex justify-center items-center text-white'>{p.title}</p>
                                <img src={p.image} alt={p.title} className="absolute h-full object-cover w-full rounded-2xl"/>
                            </div>
                        </SplideSlide>
                    )})}
            </Splide>
        </div>
    )
}



// veggie starts here +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Veggie(){
    const [veggie,setVeggie]=useState([])

    useEffect(()=>{
        getVeggie()
    },[])

    const getVeggie=async()=>{
        const check=localStorage.getItem('veggie');

        if(check){
            setVeggie(JSON.parse(check))
        }else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10&tags=vegetarian`)
            const data=await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            console.log(data)
            setVeggie(data.recipes)
        }
    }
    return(
        <div className='w-10/12 mx-auto text-black font-bold text-[2rem]'>
            <h3 className='capitalize py-4'>our vegeterian picks</h3>
            <Splide options={{
                perPage:3,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:'3rem'
            }}>
                {veggie.map((p)=>{
                    return(
                        <SplideSlide key={p.id} className="opacity-70 hover:opacity-100 cursor-pointer">
                            <div className="relative min-h-[25rem]">
                                <p className='absolute z-10	left-2/4 bottom-0 translate-x-[-50%] w-full text-center font-semibold text-[1rem] h-2/5 flex justify-center items-center text-white'>{p.title}</p>
                                <img src={p.image} alt={p.title} className="absolute h-full object-cover w-full rounded-2xl" />
                            </div>
                        </SplideSlide>
                    )})}
            </Splide>
        </div>
    )
}

function Category(){
    return(
        <div className='grid grid-flow-col justify-center gap-8 my-8'>
            <NavLink to={'/cuisine/Italian'} className="w-20 h-20 rounded-[50%] flex flex-col items-center justify-center bg-zinc-900 text-white hover:bg-orange-500">
                <FaPizzaSlice />
                <h4>italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'} className="w-20 h-20 rounded-[50%] flex flex-col items-center justify-center bg-zinc-900 text-white hover:bg-orange-500">
                <FaHamburger />
                <h4>american</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'} className="w-20 h-20 rounded-[50%] flex flex-col items-center justify-center bg-zinc-900 text-white hover:bg-orange-500">
                <GiNoodles />
                <h4>thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/Japanese'} className="w-20 h-20 rounded-[50%] flex flex-col items-center justify-center bg-zinc-900 text-white hover:bg-orange-500">
                <GiChopsticks />
                <h4>japanese</h4>
            </NavLink>
        </div>
    )
}



export {Home,Category};