import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'



const initialValues={
    name:'',
}


const validationSchema=Yup.object({
    name:Yup.string().required("Required!")
})

const NameForm=({setFeed1,feed1,setPage1,page1})=>{
    const x=useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values)=>{
            console.log('form data==>',values)
            setPage1((prevValue)=>{
                return [...prevValue,values]
            })
        setPage1('')
    }})
    // const addHandler=(e)=>{
    //     // to stop refresh
    //     e.preventDefault()
    //     setPage1((prevValue)=>{
    //         return [...prevValue,feed1]
    //     })
    //     setFeed1('')
    // }

    return(
        <div>
            <form onSubmit={x.handleSubmit} > 
                <div className='flex items-center gap-4'>
                    <div>
                        {/* <label htmlFor='email'></label> */}
                        <input type="text" id="name" name='name' onChange={x.handleChange} onBlur={x.handleBlur} value={x.values.name}  />
                        <div className="text-red-800">{x.touched.name && x.errors.name ? <div>{x.errors.name}</div> : null}</div>
                    </div>
                        <button type="submit" className='border-4'>submit</button>
                    </div> 
            </form>
        </div>
    )
}


export default NameForm