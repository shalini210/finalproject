import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../slices/Adminslice'
import AdminLogin from './AdminLogin'
import AdminNavbar from './AdminNavbar'
export default function Adminhome() {
    let islogin = useSelector((s)=>s.admin.islogin)
    // let dispatch = useDispatch()
    let ui =<h1>this is admin home after login </h1>
  return (
    <>
    <div> {islogin?"":<AdminLogin></AdminLogin>}</div>
    {/* <input type="button" value="+" onClick={()=>dispatch(increment())} />
    <input type="button" value="-" onClick={()=>dispatch(decrement())} /> */}
    </>
  )
}
