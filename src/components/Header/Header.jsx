import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <header className='header'>
        <img className='header-image' src="./images/GenLogoWEmbedded.svg" height="50"></img>
        <nav>
          <ul className="Header-nav">
            <li>
              <Link className="link" to='/'>Home</Link>
              {/* &nbsp; */}
            </li>
            <li>
              <Link className="link" to='/addmovie'>Add New Movie</Link>
            </li>
          </ul>
        </nav>
        <div className="header-main">
          <p className='header-title'>The Movies Saga</p>
          {/* <p className="header-subtitle"> v1.0</p> */}
        </div>

      </header>
    </div>
  )
}
