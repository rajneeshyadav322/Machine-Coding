import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadcrumbComponent = () => {
  const location = useLocation()

  const pathNames = location.pathname.split("/").filter(x => x)

  return (
    <div className='breadcrumb'>
      {
        pathNames.map((path, index) => {

          let isEnd = index === pathNames.length - 1

          return (
            <>
              {
                isEnd ? <span className={`breadcrumb-item breadcrumb-end`}>
                  {path}
                </span>
                  :
                  <span className={`breadcrumb-item`}>
                    <Link to="/breadcrumb">
                      {path}
                    </Link>
                    /
                  </span>
              }
            </>)
        })
      }
    </div>
  )
}

export default BreadcrumbComponent