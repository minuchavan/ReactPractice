import React from 'react'
import './Header.css'
import weblog from "./images/Screenshot 2024-08-03 103638.png"
export default function Header(props) {
    console.log(props.email);
    return (
        <div className='header'>
            <image src={weblog}></image>
           <h1>Hello...{props.email} | {props.phone}</h1> 
           <p>The Cdac ....Was the worst experience of my life..</p>
        </div>
    )
}
  