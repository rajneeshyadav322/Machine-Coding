import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import BreadcrumbComponent from './components/BreadcrumbComponent'


const Breadcrumb = () => {
    return (
        <>  
            <BreadcrumbComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </>
    )
}

export default Breadcrumb