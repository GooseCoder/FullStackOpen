import React from 'react'

export default function Notification({styles, message}) {
    if (message === null) {
        return null
    }
    return (
        <div style={styles}>
            {message}
        </div>
    )
}
