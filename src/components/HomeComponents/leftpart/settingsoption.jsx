import React, { useState } from 'react'
import { Moon } from '../../../../public/svg/Moon'
import { Logout } from '../../../../public/svg/Logout'
import DispalyMood from '../../displayMode'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logedOutUsers } from '../../../features/users/authSlice'

function Settingsoption() {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if(visible) {
        return <DispalyMood setVisible={setVisible}/>
    }

    const handleLogOut = ()=> {
      localStorage.removeItem("user")
      dispatch(logedOutUsers())
      navigate('/login')
    }

  return (
    <div className='bg-hover_color w-[280px] lg:w-[330px] py-4 px-5 shadow-md rounded-md'>
      <ul className='p-0'>
        <li className='flex items-center gap-x-2 pb-2 cursor-pointer' onClick={()=>setVisible(true)}>
            <div className='w-[40px] h-[40px] rounded-full bg-secondary_bg flex items-center justify-center shadow-lg'><Moon/></div>
            <div><p className='font-opensans font-medium xl:font-semibold text-base'>Display & Accessibility</p></div>
        </li>
        <li className='flex items-center gap-x-2 cursor-pointer'>
            <div className='w-[40px] h-[40px] rounded-full bg-secondary_bg flex items-center justify-center shadow-lg'><Logout/></div>
            <div onClick={handleLogOut}><p className='font-opensans font-medium xl:font-semibold text-base'>Logout</p></div>
        </li>
      </ul>
    </div>
  )
}

export default Settingsoption
