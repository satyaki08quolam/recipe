import React, {useState,useEffect} from 'react'
// import {BsPlus,BsFillLightningFill, BsGearFill} from "react-icons/fa";
// import {FaFire,FaPoo} from "react-icons/fa";
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaBeer } from 'react-icons/fa';





// const Dashboard=()=>{
//     return(
//         <>
//         <div className="flex fixed top-0 left-[23px] h-screen bg-green-500 w-16 m-0 text-rose-800">
//             <div>template</div>
//             <div>logos</div>
//         <div></div>

//             <Icons icon={<FaFire size="28" />} />
//             <Icons icon={<BsPlus size="32" />} />
//             <Icons icon={<BsFillLightningFill size="20" />} />
//             <Icons icon={<FaPoo size="28" />} />
//         <Icons icon={<FaHeart size="28" />} />
//             <Icons icon={<FaBeer />} />
//         </div>
//         </>
//     )
// }





const Gallery=()=>{
    const [images, setImages]=useState([])
    const {isLoading, setIsLoading}=useState(true);
    const [term,setTerm]=useState('');
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setImages(data.hits);
            setIsLoading(false);
        })
        .catch(err=>console.log(err))
    }, [setIsLoading, term])


    return(
        <div className='container mx-auto'>
            {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>loading....</h1>:
            <div className='grid grid-cols-3 gap-4'>
                {images.map(image=>(<ImageCard key={image.id} image={image} />))}
            </div>
            }
        </div>
    )
}



const ImageCard=(props)=>{
    const tags=props.image.tags.split(',')

    return(
        <div className='rounded overflow-hidden shadow-lg max-w-sm flex flex-wrap basis-full'>
            <div className='basis-full overflow-hidden'>
                <img src={props.image.webformatURL} alt="" className='w-full block max-w-full hover:cursor-pointer hover:scale-[1.2] object-cover transition-transform aspect-[1/1]'/>
            </div>
            <div className='px-6 py-4 basis-full'>
                <div className='font-bold uppercase text-center text-purple-900 text-xl mb-2 mt-0'>
                    photo by john doe
                </div>
                <ul className='flex gap-4'>
                    <li className='basis-full items-center text-center flex flex-col px-2'>
                        <strong>views: </strong>
                        {props.image.views}
                    </li>
                    <li className='basis-full items-center text-center flex flex-col px-2'>
                        <strong>downloads: </strong>
                        {props.image.downloads}
                    </li>
                    <li className='basis-full items-center text-center flex flex-col px-2'>
                        <strong>likes: </strong>
                        {props.image.likes}
                    </li>
                </ul>
            </div>

            <div className='bg-slate-600 py-4 px-6 basis-full self-end flex justify-center'>
                {/* <span className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag1</span>
                <span className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag2</span>
                <span className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag3</span> */}
                {tags.map((tag,index)=>(
                    <span key={props.image.index} className='bg-gray-200 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag1</span>
                ))}
            </div>
        </div>
    )
}


export {Gallery}