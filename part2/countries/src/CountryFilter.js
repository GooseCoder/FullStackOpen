import React from 'react'

export default function CountryFilter({filterHandler, filter}) {
    return (
        <div>
            find countries: <input type="text" value={filter} onChange={filterHandler}/>
        </div>
    )
}
