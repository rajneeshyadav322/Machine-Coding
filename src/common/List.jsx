import React from 'react'

const data = [{
    name: "Pagination",
    path: "/pagination"
}, {
    path: "/autocomplete",
    name: "Autocomplete"
}]

const List = () => {

    return (
        <>
            {data?.map((component) => (
                <div>
                    <a href={component.path}>{component.name}</a>
                </div>))
            }
        </>
    )
}

export default List