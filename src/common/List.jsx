import React from 'react'

const data = [{
    name: "Pagination",
    path: "/pagination"
}, {
    path: "/autocomplete",
    name: "Autocomplete"
}, {
    path: "selectable-grid",
    name: "Selectable Grid"
}]

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