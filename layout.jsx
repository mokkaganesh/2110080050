import React from 'react'
import Header from './_components/Header'
import Formdata from './_components/Formdata'

function DashboardLayout({ children}) {
  return (
    <div>
      <Header/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
      </div>
      <Formdata/>
    </div>
  )
}

export default DashboardLayout