import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
export default function AddBlog() {
    let islogin = useSelector((s)=>s.admin.islogin)
     let navigate = useNavigate()
    useEffect(()=>
    {
    console.log(islogin)
       
     if(!islogin)
        {
            navigate("/adminHome")
        }
    },[islogin])
  
  return (
    <div>AddBlog : we will add blog form hereS</div>
  )
}
