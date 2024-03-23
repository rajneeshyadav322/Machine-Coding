import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './common/Loader'
import List from './common/List'

const Pagination = lazy(() => import('./pagination/Pagination'))
const Autocomplete = lazy(() => import('./autocomplete/Autocomplete'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path='/pagination' element={<Pagination />} />
          <Route path='/autocomplete' element={<Autocomplete />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App