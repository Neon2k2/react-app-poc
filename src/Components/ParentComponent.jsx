import React, { useState } from 'react'

export default function ParentComponent() {
    const[status,setStatus] = useState(true);
    function getData() {
        alert("hello");
    }
    return (
    <div>
        <button onClick={getData}>Click</button>
        <div>
            {
                status? <h3>Hello World</h3>:null
            }
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    </div>
  )
}
