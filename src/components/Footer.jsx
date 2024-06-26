import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="row p-5 mt-4">
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <div className='d-flex'>
        <FontAwesomeIcon icon={faVideo} style={{color: "#FFD43B",}} size='2x'/>
        <h4 className='ms-2'>Media Player</h4>
        </div>
        <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt, nihil laudantium aspernatur esse, molestias facere atque aut fugiat, quis asperiores consectetur? Sit eius ab quaerat nam sapiente ipsam atque!</p>    
        </div>
        <div className="col-md-2 justify-content-center d-md-flex">
        <div>
        <h4>Links</h4>
        <p className='mt-4'><Link to={'/'}>Landing Page</Link></p>
        <p><Link to={'/home'}>Home</Link></p>
        <p><Link to={'/watch-history'}>Watch History</Link></p>
        </div>
        </div>
        <div className="col-md-2">
        <h4>Guides</h4>
        <p className='mt-4'>React Bootstrap</p>
        <p>React</p>
        <p>Bootswatch</p>
        </div>
        <div className="col-md-3">
        <h4>Contact us</h4>
        <div className='d-flex mt-4'>
            <input type="email" placeholder='Email' rounded />
            <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex mt-4 justify-content-between'>
        <FontAwesomeIcon icon={ faInstagram } size='2x'/>
        <FontAwesomeIcon icon={faFacebook} size='2x' />
        <FontAwesomeIcon icon={faTwitter} size='2x' />
        <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
        </div>
        </div>
        <div className="col-md-1"></div>
    </div>
    </>
  )
}

export default Footer