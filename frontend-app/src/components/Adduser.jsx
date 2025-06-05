import axios from 'axios'
import React, { useRef } from 'react'
import { API_URL } from '../config/apidetails'

export default function Adduser() {
    // name:req.body.name,age:parseInt(req.body.age)
    let nameref = useRef()
    let ageref = useRef()
    const add=()=>
    {
        let data = {name:nameref.current.value,age:ageref.current.value}
        axios.post(API_URL+"user",data)
        .then((d)=>alert(d.data.msg))
        .catch((err)=>alert(err))

    }
  return (
    <div>Adduser

        <p>Enter NAme : <input type="text" ref={nameref} className='border-1' /></p>
        <p>enter age : <input type="number" ref={ageref}  className='border-1'/></p>
        <input type="button" value="Add user" onClick={()=>add()} className='h-8 w-24 bg-blue-400 text-white' />
    </div>
  )
}
