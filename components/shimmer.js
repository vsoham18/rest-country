import React from 'react'
import './Shimmer.css'

export default function Shimmer() {
  return (
    <div className='country-cards'>
         {Array.from({ length: 100 }).map((el, i) => {
        return <div key={i} className="cards shimmer-card"></div>
      })}
    </div>
  )
}
