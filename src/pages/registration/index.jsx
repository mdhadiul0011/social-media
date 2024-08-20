import React from 'react'
import RegAuth from '../../components/regAuth/auth'
import { RegistrationIcon } from '../../../public/svg/RegistrationIcon'
import RegForm from '../../components/regAuth/regform'
import { Helmet } from 'react-helmet-async'

function Registration() {

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className='relative sm:mt-32 md:mt-0 lg:mt-0 h-screen bg-gradient-to-br from-purple-100 to-pink-100 via-cayan-100'>
        <div className='hidden lg:block w-[500px] h-[500px] bg-purple-100 rounded-full absolute top-[-200px] left-[-200px] z-[-999]'></div>
        <div className='hidden lg:block w-[200px] h-[200px] bg-white border-2 border-purple-100 rounded-full absolute bottom-0 right-0 z-[-999]'></div>
        <div className='container flex gap-x-6 justify-center items-center h-screen'>
          <div className='hidden lg:block w-[45%]'>
            <RegAuth icon={<RegistrationIcon/>} title="Start Journey with Us" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quo veritatis non nemo ipsam sint nobis molestias fugit tempore recusandae! Quo aliquid alias, modi asperiores, ab minima tempore quia pariatur totam voluptatibus facilis rerum! Aliquam nihil deserunt omnis necessitatibus dolore assumenda quisquam facere, dignissimos maxime, eligendi recusandae? Dolore, architecto repudiandae?"/>
          </div>
          <div className='width-full lg:w-[45%]'><RegForm/></div>
        </div>
      </div>

    </>
  )
}

export default Registration
