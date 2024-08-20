import react, { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home'
import Registration from './pages/registration'
import Login from './pages/login'
import NotLoggedInUser from './privateRouter/notLoggedInUser'
import LoggedInUser from './privateRouter/loggedInUser'
import Rootlayouts from './components/RootLayouts/Rootlayouts'
import FriendsPage from './pages/friends'
import CreatePostPopup from './components/createpostpopup'
import ActivatePages from './pages/home/activatePages'
import Resetpass from './pages/resetpassword'

function App() {
  const [visible, setVisible] = useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUser/>}>
        <Route element={<Rootlayouts/>}>
          <Route path="/" element={<Home setVisible={setVisible}/>}></Route>
          <Route path='/friends' element={<FriendsPage/>}></Route>
          <Route path='/activate/:token' element={<ActivatePages/>}></Route>
        </Route>
        </Route>
        <Route element={<NotLoggedInUser/>}>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
        <Route path='/forgotpass' element={<Resetpass/>}></Route>
      </Route>
    )
  )

  return (
    <>
    {visible && <CreatePostPopup setVisible={setVisible}/>}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
