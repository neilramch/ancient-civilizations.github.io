import React from 'react'
import './Header.css'
import { Router } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <img src='/public/rockpeople.png'/>
        <div className="header-text">
            <h1>Histopedia</h1>
            <h3>A GUIDE TO ANTIQUITY</h3>
         </div>
    </div>
  )
}

export default Header
