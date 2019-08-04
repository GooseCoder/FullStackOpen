import React from 'react'

export default function Button({clickHandler, text}) {
    return (
        <button onClick={clickHandler}>{text}</button>
    )
}
