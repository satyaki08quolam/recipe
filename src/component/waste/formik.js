import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'



const initialValues={
    name:'',
}


const validationSchema=Yup.object({
    name:Yup.string().required("Required!")
})

const NameForm=({text,setInfo,info,setText})=>{
    const x=useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values)=>
            {
                console.log('form data==>',values)
                setInfo([
                        ...info,{text:values.name,check:false,id:Math.random()*1000},
                ])
                console.log(info)
                values.name=''
    }})

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