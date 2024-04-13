import React from 'react'
import './index.css'
import Grid from './components/Grid'

const SelectableGrid = () => {
  return (
    <>
      <h1 className='title'>Selectable Grid</h1>
      <Grid rows={10} cols={10}/>
    </>
  )
}

export default SelectableGrid