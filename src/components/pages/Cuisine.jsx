import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'


function Cuisine() {
    const [cuisine,setCuisine]=useState([])
    let params=useParams();

    const getCuisine = async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}`)
        const recipes=await data.json();
        console.log(recipes)
        setCuisine(recipes.results)
    }
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])


  return (
    <div className="border-2 border-solid border-red-400 grid grid-cols-4 gap-8">
        {cuisine.map((item)=>{
            return(
                <div key={item.id}>
                    <img src={item.image} alt='' />
                    <h4 className='center p-4 border-2'>{item.title}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default Cuisine;