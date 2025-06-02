import React, { useEffect, useState } from 'react'

import { API_URL } from '../config/apidetails'

export default function Allusers() {
    const [usersUI,setusersUI] = useState()
    useEffect(()=>
    {
        fetch(API_URL+"user")
        .then((d)=>d.json())
         .then((d)=>{
            console.log(d.data)
            let users = d.data
            let ui = users.map((u)=>{
                return <tr key={u._id}><td className='border-1'>{u.name}</td>
                <td className='border-1'>{u.age}</td></tr>
            })
            setusersUI(ui)
            })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>Allusers:<br></br>
    <table className='border-2'>
        <thead>
        <tr><th className='border-1'>name</th> <th className='border-1'>age</th></tr>
</thead>
<tbody>{usersUI}</tbody>
    </table>
    </div>
  )
}
