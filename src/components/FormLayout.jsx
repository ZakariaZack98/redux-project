import React from 'react'
import { Outlet } from 'react-router-dom'

const FormLayout = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-800'>
      <div className="bg-white rounded-md p-5 w-1/2 h-7/10">
        <Outlet/>
      </div>
    </div>
  )
}

export default FormLayout
