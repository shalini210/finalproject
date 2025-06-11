import React from 'react'
import { Link, useNavigate } from 'react-router'
import { logoutAdmin } from '../../slices/Adminslice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
export default function AdminNavbar() {
    let dispatch = useDispatch()
  return (
    <div>
        <nav className='bg-rose-600 flex list-none gap-10 text-white underline'>
            <li>
                <Link to="/addblog">Add Blog</Link>
                <input type='button' value="Logout"
                 onClick={()=>dispatch(logoutAdmin())}/>
            </li>
        </nav>
    </div>
  )
}
