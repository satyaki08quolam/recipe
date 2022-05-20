// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// const Searched = () => {
//     const [searchedRecipes,setSearchedRecipes]=useState([])
//     let params=useParams();

//     const getSearched=async(term)=>{

//         // const check=localStorage.getItem('images')

//         // if(check){
//         //     setImages(JSON.parse(check))
//         // }else{
//             const api=await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&query=${term}&image_type=photo&pretty=true`)
//             const data=await api.json();
//             console.log(data);
//             setSearchedRecipes(data.hits);
//             // setIsLoading(false);
//             // localStorage.setItem('images',JSON.stringify(data.hits));
//             setSearchedRecipes(data.hits)
//         // }        
//     }
//     useEffect(()=>{
//         getSearched(params.search)
//     },[params.search])
//   return (
//     <div>
//         Searched
//         {searchedRecipes.map((item)=>{
//             return(
//                 <div key={item.id}>
//                     <img src={item.image} alt="" />
//                     <h4>{item.title}</h4>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default Searched