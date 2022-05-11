import React from 'react'
import './NavBar.scss'
import {images} from '../../constants'
const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="Logo"></img>
      </div>
      <ul>
        {['home', 'about' , 'work' , 'skills' , 'contacts'].map( (item)=>{
          return(
            <li key={`link-${item}`}>
              <div/>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        } )}
      </ul>
    </nav>
  )
}

export default NavBar