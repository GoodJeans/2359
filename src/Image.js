import React from 'react'

export default function Image(props) {
    console.log("load images inside image." + JSON.stringify(props.data))
    return (
        <div>
            {props.max}

        </div>
    )
}
