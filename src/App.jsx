import React from 'react'
import Counter from './components/Counter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormLayout from './components/FormLayout'
import NameGender from './components/SignUpForm/NameGender'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormLayout/>}>
          <Route index element={<NameGender/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App