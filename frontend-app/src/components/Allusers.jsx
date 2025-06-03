import React, { useEffect, useState } from 'react'
import axios from "axios"
import { API_URL } from '../config/apidetails'

export default function Allusers() {
    const [usersUI,setusersUI] = useState()
    
    useEffect(()=>
    {
      axios.get(API_URL+"user")
      .then((d)=>
        {
    
         let uitemp = (d.data.users).map((d)=><tr key={d._id}><td>{d.name}</td><td>{d.age}</td></tr>)
         setusersUI(uitemp)
    })
      .catch((err)=>console.log(err))
    },[])
  return (
    <div>Allusers:<br></br>
   <table>
    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>
      {usersUI}
    </tbody>
   </table>
    </div>
  )
}
