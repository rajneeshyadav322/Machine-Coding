import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="products">
        <button>View All Products</button>
      </Link>
    </div>
  )
}

export default Home