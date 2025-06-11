import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { logoutAdmin,loginAdmin } from '../../slices/Adminslice'
export default function AdminLogin() {
  let usernameref = useRef()
  let pwdref = useRef()
  let dispatch = useDispatch()
  const [msg,setmsg ] = useState("")
  let chklogin=()=>
  {
    if(usernameref.current.value=="admin" && pwdref.current.value=="123456")
    {
        dispatch(loginAdmin())
    }
    else
    {
      setmsg("Invalid credentials")
    }
  }
  return (
    <div>AdminLogin
      <div><label htmlFor="">Username</label> <input type="text" ref={usernameref} /></div>
      <div><label htmlFor="">password</label> <input type="password" ref={pwdref} /></div>
      <div><input type="button" value="Login" onClick={()=>chklogin()} /><br />
      {msg}</div>
    </div>
  )
}
