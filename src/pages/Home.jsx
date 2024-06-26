import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View';
import Category from '../components/Category';

function Home() {
  const [addStatus, setaddStatus] = useState([])
  return (
    <>
    <div className="d-flex p-5 ms-5">
      <Add setaddStatus={setaddStatus} />
      <h5 className='ms-auto'><Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>Watch History <FontAwesomeIcon icon={faClockRotateLeft} /> </Link></h5>
    </div>
    <div className="row w-100 p-4">
      <div className="col-md-9">
        <h5>All videos</h5>
        <View addStatus={addStatus} />
      </div>
      <div className="col-md-3">
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home