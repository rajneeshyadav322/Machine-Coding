import React from 'react'
import { useState } from 'react'
import './index.css'

const Pagination = () => {

    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = 4;

    const handleNext = () => (currentPage + 1) < totalPages && setCurrentPage(currentPage + 1)
    const handlePrev = () => currentPage > 0 && setCurrentPage(currentPage - 1)

    const handlePageChange = (p) => setCurrentPage(p)

    return (
        <>
            <button onClick={handlePrev}>Prev</button>
            {
                [...Array(totalPages)].map((_, p) => <span onClick={() => handlePageChange(p)} className={`page ${currentPage === p && "selected-page"}`}>{p + 1}</span >)
            }
            <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Pagination