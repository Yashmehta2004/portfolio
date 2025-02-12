import React, { Component } from 'react'
import "./heros.css";
import YashPhoto from '../src/YashPhoto.jpg';

export class Hero extends Component {
  render() {
    return (
    <div className='hsec'>
        <div className='hdiv'>
        <h1 className='typing-text'>Hi, I'm Yash Mehta</h1>
        <p>I am a Full Stack WebDeveloper skilled in HTML, CSS, REACT, CPP.
           I am a passionate learner and a tech enthusiast.
       </p>   
       <p>
          Welcome to my Website 😊 . Get to know more about Me
        </p>
        <p className='but'>
        <a href='https://www.linkedin.com/in/yash-mehta-a9163724b/'>Reach Out</a>
        </p>
        </div>
        <div >
        <img className='img1' src={YashPhoto} alt='Yash Mehta' />
        </div>
    </div>
    )
  }
}

export default Hero
