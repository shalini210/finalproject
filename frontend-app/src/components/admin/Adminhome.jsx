import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../slices/Adminslice'
export default function Adminhome() {
    let data = useSelector((s)=>s.admin.value)
    let dispatch = useDispatch()
    console.log(data)
  return (
    <>
    <div> count {data}</div>
    <input type="button" value="+" onClick={()=>dispatch(increment())} />
    <input type="button" value="-" onClick={()=>dispatch(decrement())} />
    </>
  )
}
