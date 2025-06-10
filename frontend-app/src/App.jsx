import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allusers from './components/Allusers'
import Adduser from './components/Adduser'
import { Route ,Routes} from 'react-router'
import { Link } from 'react-router'
import Adminhome from './components/admin/Adminhome'
import AdminLogin from './components/admin/AdminLogin'
import { useSelector } from 'react-redux'
function App() {
 
let data = useSelector((s)=>(s.admin.islogin).toString())
  return (
    <div>
      Current counter is : {data}
      <div className='flex gap-4 h-9 bg-orange-400'>
      <Link to="/showusers">All users</Link>
      <Link to="/adduser">Add User</Link>
      <Link to="/adminHome">Admin</Link>
      </div>
      
      <Routes>
        <Route path='/adminHome' element={<Adminhome></Adminhome>}></Route>
        <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/adduser' element={<Adduser></Adduser>}></Route>
        <Route path='/showusers' element={<Allusers></Allusers>}></Route>
      </Routes>
    
   </div>
  )
}

export default App
