import React from 'react'
import Header from './Header'
export default function Main({children}) {
  return (
    <div>
        <Header />
        {
            children
        }
    </div>
  )
}
