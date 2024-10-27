import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <Link to="1">
        <button>Product 1</button>
      </Link>
      <Link to="2">
        <button>Product 2</button>
      </Link>
      <Link to="3">
        <button>Product 3</button>
      </Link>
      <Link to="4">
        <button>Product 4</button>
      </Link>
    </div>
  )
}

export default Products