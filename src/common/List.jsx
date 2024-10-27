import React from 'react'
import {paths} from '../config/paths'

export const data = [
    {
        name: paths.PAGINATION,
        path: "/pagination"
    },
    {
        path: paths.AUTOCOMPLETE,
        name: "Autocomplete"
    },
    {
        path: paths.SELECTABLE_GRID,
        name: "Selectable Grid"
    },
    {
        path: paths.BREADCRUMB,
        name: "Breadcrumb"
    }
]


const List = () => {

    return (
        <>
            {data?.map((component) => (
                <div key={component.name}>
                    <a href={component.path}>{component.name}</a>
                </div>))
            }
        </>
    )
}

export default List