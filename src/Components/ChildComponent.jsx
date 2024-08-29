import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h2>Child</h2>
        <button onClick={()=>props.data()}>Click</button>
    </div>
  )
}
