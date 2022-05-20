import React, { useEffect, useState } from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Popular = () => {
    const [popular,setPopular]=useState([])
    
    useEffect(()=>{
        getPopular();
    },[])

    const getPopular=async()=>{
        const check=localStorage.getItem('popular')


        if(check){
            setPopular(JSON.parse(check))
        }else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`)
            const data=await api.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes));
            console.log(data)
            setPopular(data.recipes)
        }

    }
  return (
    <div>
        <div className='grid gap-4 box-border border-solid border-2 border-green-500 px-20 py-20'>
            <h3 className='border-solid border-2 border-blue-200 uppercase py-8 mx-auto my-0'>popular picks</h3>
            <Splide options={{
                perPage:4,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:'3rem'
                }} className="border-solid border-8 border-blue-500">
                {popular.map((p)=>{
                    return(
                        <SplideSlide className='box-border grid'>
                        <div key={p.id} className="box-border border-solid border-2 border-red-700 flex gap-6 flex-wrap">
                            <p className='px-4 text-center box-border border-solid border-2 border-yellow-400 basis-full'>{p.title}</p>
                            <figure className="box-border border-solid border-4 border-yellow-400 w-full self-end basis-full">      
                                <img src={p.image!=="N/A"? p.image : "https://via.placeholder.com/400"} alt={p.title} className="box-border block w-full"/>
                            </figure>
                        </div>
                        </SplideSlide>
                )})}
            </Splide>
        </div>
    </div>
    )
}

export default Popular;