import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { API_URL } from '../config/apidetails'

export default function Adduser() {
    // name:req.body.name,age:parseInt(req.body.age)
    let nameref = useRef()
    let ageref = useRef()
    let btnref = useRef()
    let idref = useRef()
    const [users,setusers]=useState([])
    useEffect(()=>
    {
      axios.get(API_URL+"user")
      .then((d)=>setusers(d.data.users))
    },[])

    const add=(event)=>
    {
      event.preventDefault()
        let data = {name:nameref.current.value,age:ageref.current.value}
        if(btnref.current.value=="Add")
          {
                  axios.post(API_URL+"user",data)
              .then((d)=>{
              alert(d.data.msg)
                setusers(d.data.users)}
                )
              .catch((err)=>alert(err))
        }
        else
        {
          //this is update case 
          data.id = idref.current.value
console.log(data)
           axios.put(API_URL+"user",data)
              .then((d)=>{
              alert(d.data.msg)
                setusers(d.data.users)}
                )
              .catch((err)=>alert(err))
            }
        empty()
    }

    const empty = ()=>
    {
      nameref.current.value=""
      ageref.current.value=""
      btnref.current.value="Add"
    }
    const deleteuser =async (id)=>
    {
      // alert(id)
      let i = confirm("are you sure want to delete ?")
      if(!i)
      {
        return
        
      }
      await axios.delete(API_URL+"user/"+id)
      .then((d)=>
      {
       alert(d.data.msg) 
       setusers(d.data.users)
      })
    }
    const setedit = (user)=>
    {
      nameref.current.value = user.name;
      ageref.current.value = user.age
      btnref.current.value = "Update"
      idref.current.value = user._id
    }
  return (
    <div>
    <div>Adduser
      <form onSubmit={(e)=>add(e)}>
    <input type="text" ref={idref}  disabled className=''/>
        <p>Enter NAme : <input required type="text"
         ref={nameref} className='border-1' /></p>
        <p>enter age : <input required type="number"
         ref={ageref}  className='border-1'/></p>
        <input type="submit" value="Add" ref={btnref}
          className='h-8 w-24 bg-blue-400 text-white' />
        </form>
    </div>
    <div>
<table>
  <thead>
    <tr>
      <th className='border-1'>name</th>
      <th className='border-1'>age</th>
      <th className='border-1'>edit</th>
      <th className='border-1'>delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>{
   return   <tr>
    <td className='border-1'>{user.name}</td>
    <td className='border-1'>{user.age}</td>
    <td className='border-1'><input type="button" 
    value = "edit" onClick={()=>setedit(user)}/></td>
    <td className='border-1'><input type="button" 
    value="delete" onClick={()=>deleteuser((user)._id)}/></td>
    </tr>
    })}
  </tbody>
</table>
    </div>
    </div>
  )
}
