import React from 'react'
import Counter from './components/Counter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormLayout from './components/FormLayout'
import NameGender from './components/SignUpForm/NameGender'
import ContactDetails from './components/SignUpForm/ContactDetails'
import Address from './components/SignUpForm/Address'
import Summery from './pages/Summery'
import Post from './pages/Post'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Post/>}/>
        {/* <Route path='/' element={<FormLayout/>}>
          <Route index element={<NameGender/>} />
          <Route path='/step-2' element={<ContactDetails/>} />
          <Route path='/step-3' element={<Address/>} />
          <Route path='/summery' element={<Summery/>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App