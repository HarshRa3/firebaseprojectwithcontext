import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import SignUp from '../pages/SignUp'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default Router
