import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './common/Loader'
import List from './common/List'
import { paths } from './config/paths'

const Pagination = lazy(() => import('./pagination/Pagination'))
const Autocomplete = lazy(() => import('./autocomplete/Autocomplete'))
const SelectableGrid = lazy(() => import('./selectable-grid/SelectableGrid'))
const Breadcrumb = lazy(() => import('./breadcrumb/Breadcrumb'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path={paths.PAGINATION} element={<Pagination />} />
          <Route path={paths.AUTOCOMPLETE} element={<Autocomplete />} />
          <Route path={paths.SELECTABLE_GRID} element={<SelectableGrid />} />
          <Route path={`${paths.BREADCRUMB}/*`} element={<Breadcrumb />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App