import React from 'react'

const button = (props) => {
    return (
        <div>
            {/* /* {props.children}
            <button onClick={props.handleclick}>
                {props.text}
            </button> */}
            {props.children}
            <button onClick={props.handleclick}>
                {props.text}
                {props.count}
            </button>
        </div>
    )
}
export default button
