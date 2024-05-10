import React from 'react'
import PhoneLogin from '../components/PhoneLogin/PhoneLogin'
import Header from '../components/Shared/Header/Header'
import Footer from '../components/Shared/Footer/Footer'

const LoginSeller = () => {
  return (
    <div className='bg-secondary'>
        <Header />
        <PhoneLogin className="py-5" />
    <Footer />
    </div>
  )
}

export default LoginSeller