import React, { Component } from 'react'
import './abouts.css';
export class About extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='head1'>ABOUT ME</h1>
        <div >
        <ul>
        <div className='div1'>
        <div>
            <img className="im" src='https://cdn.wccftech.com/wp-content/uploads/2016/10/Front-End-Development-Bundle.jpg' alt='frontend'></img>
            </div>
            <div className='hov1'>
            <li className='list1'>
                <h1>Frontend Developer </h1>
                <p>I am skiled in Fronted Developer and still learn new things that i am unaware of</p>
            </li>
            </div>
            </div>
            

            <div className='div1'>
            <div>
            <img className="im" src='https://geekflare.com/wp-content/uploads/2021/09/Backend-solution.png' alt='backend'></img>
            </div>
            <div className='hov1'>
            <li className='list1'>
                <h1>Backend Developer</h1>
                <p>I know the Backend part also but as of now i am not that skilled in it</p>
            </li>
            </div>
            </div>


            <div className='div1'>
            <div>
            <img className="im" src='https://c8.alamy.com/comp/P7F02H/program-coding-website-P7F02H.jpg' alt='coding'></img>
            </div>
            <div className='hov1'>
            <li className='list1'>
                <h1>Coding</h1>
                <p>I am skilled in Cpp , C , Java and DSA</p>
            </li>
            </div>
            </div>
                
        </ul>
      </div>
      </div>
    )
  }
}

export default About
