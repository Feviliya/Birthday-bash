import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/user/Login'
import {Signup} from './pages/user/Signup'
import { Landing } from './pages/user/Landing'
import { AdminLogin } from './components/admin/AdminLogin'
import { About } from './pages/user/About'
import { Myevents } from './pages/user/Myevents'
import { Silver } from './pages/user/Silver'
import { Gold } from './pages/user/Gold'
import { Diamond } from './pages/user/Diamond'
import { Customers } from './pages/admin/Customers'
import { Eventvenu } from './pages/admin/Eventvenu'
import { Bookings } from './pages/admin/Bookings'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
      <Route path='/admin' element={<AdminLogin></AdminLogin>}></Route>
      <Route path='/about-us' element={<About></About>}></Route>
      <Route path='/myevents' element={<Myevents></Myevents>}></Route>
      <Route path='/Silver' element={<Silver></Silver>}></Route>
      <Route path='/Gold' element={<Gold></Gold>}></Route>
      <Route path='/Diamond' element={<Diamond></Diamond>}></Route>
      <Route path='/bookings' element={<Bookings></Bookings>}></Route>
      <Route path='/customers' element={<Customers></Customers>}></Route>
      <Route path='/event&venues' element={<Eventvenu></Eventvenu>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
