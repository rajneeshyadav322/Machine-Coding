import React, { useCallback, useState } from 'react'


const Grid = ({ rows = 10, cols = 10 }) => {

  const [isMouseDown, setIsMouseDown] = useState(false)
  const [selectedGridItems, setSelectedGridItems] = useState([])


  const handleMouseDown = (item) => {
    setIsMouseDown(true)
    setSelectedGridItems([item])
  }

  const handleMouseEnter = useCallback((item) => {
    if (isMouseDown) {
      const startBox = selectedGridItems[0]
      const endBox = item;

      const startRow = Math.floor((startBox - 1) / cols)
      const startCol = (startBox - 1) % cols

      const endRow = Math.floor((endBox - 1) / cols)
      const endCol = (endBox - 1) % cols

      const minRow = Math.min(startRow, endRow)
      const minCol = Math.min(startCol, endCol)

      const maxRow = Math.max(startRow, endRow)
      const maxCol = Math.max(startCol, endCol)

      let selected = []
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          selected.push(i * cols + j + 1)
        }
      }
      setSelectedGridItems(selected)
    }
  }, [isMouseDown])

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }


  return (
    <div
      className='grid'
      style={{ "--rows": rows, "--cols": cols }}
      onMouseUp={handleMouseUp}
    >
      {
        [...Array(rows * cols).keys()].map((elem) => (
          <div
            key={elem}
            className={`${selectedGridItems.includes(elem) ? "selected grid-item" : "grid-item"}`}
            onMouseEnter={() => handleMouseEnter(elem)}
            onMouseDown={() => handleMouseDown(elem)}
          >
            {elem + 1}
          </div>
        ))
      }
    </div>
  )
}

export default Grid