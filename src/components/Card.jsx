import React from 'react'

const card = (props) => {
  return (
    <div>
      {/* <h1>hello world</h1> */}
      {/* {props.name}
      <p>daru</p>
      {props.children} */}
      <input type="text" onChange={(e)=> props.setName(e.target.value)} />
    </div>
  )
}

export default card
