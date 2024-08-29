import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useCallback } from 'react';

export default function Todo() {
    const[count, setCount] = useState(0);
    const add = useCallback(()=>{
        setCount(count)
    })
    // const[data, setData] = useState();
    // useEffect(()=> {
    //     axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>response.json).then(data=>setData(data));
    // }, []);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={}></button>
    </div>
  )
}
