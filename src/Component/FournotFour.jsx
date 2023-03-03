import React from 'react'
import '../styles/four.css'
import Header from './Header'

function FournotFour() {
  return (
   <>
   <div className='container'>
    <div className='text-center error-wrap'>
        <div className='bubbles'>
            <img src="/assets/images/404-re.jpg" alt="four" style={{width:"351px",height:"351px"}} />
        <h2>404</h2>
        </div>
        <p>We're sorry, but the Page you were looking for, couldn't be found.</p>
        <a href="" class="btn color2-bg mb-4">Back to Home Page<i class="far fa-home-alt"></i></a>
    </div>
   </div>
   </>
  )
}

export default FournotFour