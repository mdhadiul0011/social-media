import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ForgetPass from '../../components/forgetpass/ForgetPass'
import Resetpassword from '../../components/forgetpass/resetpassword'
import Changepassword from '../../components/forgetpass/changepassword'
import Secretcode from '../../components/forgetpass/code'


function Resetpass() {
    const [visible, setVisible] = useState(0)
    const [loading, setLoading] = useState(null)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [user, setUser] = useState()

    const renderComponent = ()=> {
        switch(visible){
            case 0: 
            return <ForgetPass setLoading={setLoading} setError={setError} setUser={setUser} error={error} setVisible={setVisible}/>;
            case 1: 

            if(user){
                return <Resetpassword user={user} setSuccess={setSuccess} success={success} loading={loading} setError={setError} error={error} setVisible={setVisible} setLoading={setLoading}/>;
            }
            setVisible(0)
            return null

            case 2: 
            if(user){
                return <Secretcode user={user} setSuccess={setSuccess} success={success} loading={loading} setError={setError} error={error} setVisible={setVisible} setLoading={setLoading}/>;
            }
            setVisible(0)
            return null
            
            case 3: 
            if(user) {
                return <Changepassword user={user} setSuccess={setSuccess} success={success} loading={loading} setError={setError} error={error} setVisible={setVisible} setLoading={setLoading}/>;
            }
            setVisible(0)
            return null

            default:
            return null
        }
    }
  return (
    <div>
        <Helmet><title>Forget Password</title></Helmet>
      
        <div className='h-screen bg-gradient-to-br from-purple-100 to-pink-100 via-cayan-100 flex items-center justify-center'>
            {renderComponent()}
        </div>
    </div>
  )
}

export default Resetpass
