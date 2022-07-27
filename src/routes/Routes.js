import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { PrivateOutlet } from '../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/*' element={<PrivateOutlet/>}>
        <Route path='*' element={<p>Not Found</p>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes;