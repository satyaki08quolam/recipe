import React, { useEffect, useState } from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Popular = () => {
    const [popular,setPopular]=useState([])
    
    useEffect(()=>{
        getPopular();
    },[])

    const getPopular=async()=>{
        const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`)
        const data=await api.json();
        console.log(data)
        setPopular(data.recipes)
    }
  return (
    <div>
        <div className='grid gap-4 box-border'>
            <h3>popular picks</h3>
            <Splide options={{
                perPage:4,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:'3rem'
                }}>
                {popular.map((p)=>{
                    return(
                        <SplideSlide>
                        <div key={p.id} className="box-border border-solid border-2 border-red-700 rounded-3xl">
                            <p>{p.title}</p>
                            <figure className="box-border rounded-3xl">      
                                <img src={p.image!=="N/A"? p.image : "https://via.placeholder.com/400"} alt={p.title} className="box-border block w-full h-auto rounded-3xl" />
                            </figure>
                        </div>
                        </SplideSlide>
                )})}
            </Splide>
        </div>
    </div>
   )
}

export default Popular