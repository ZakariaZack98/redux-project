import React from 'react'
import { useSelector } from 'react-redux'

const Summery = () => {
  const {firstaName, lastName, gender, phone, email, address, zipCode} = useSelector(state => state.form);
  return (
    <div>
      <h1 className="text-2xl font-medium text-center text-blue-500">Summery:</h1>
      <div className="flex flex-col gap-y-2">
        <p className='text-blue-500 font-medium'>Full Name: <span className='text-black'>{firstaName} {lastName}</span></p>
        <p className='text-blue-500 font-medium'>Gender: <span className="text-black">{gender}</span></p>
        <p className='text-blue-500 font-medium'>Phone: <span className="text-black">{phone}</span></p>
        <p className='text-blue-500 font-medium'>Email: <span className='text-black'>{email}</span></p>
        <p className='text-blue-500 font-medium'>Address: <span className="text-black">{address}</span></p>
        <p className='text-blue-500 font-medium'>ZipCode: <span className="text-black">{zipCode}</span></p>
      </div>
    </div>
  )
}

export default Summery
