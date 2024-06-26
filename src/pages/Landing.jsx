
import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Landing() {
  return (
    <>
    <div className="row p-5 mx-5 my-5 d-flex justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <div className="col-md-5 p-5">
        <h3>Welcome to <span className='text-warning'> Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet. Excepturi nulla provident ipsum atque reiciendis dolorum cum officia optio eius porro aliquid iusto magni iste, expedita est vel nobis deserunt tempora? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptates repellendus aliquid beatae, deserunt quisquam alias obcaecati non molestias, soluta dolores perferendis illo sunt porro a magni? Nesciunt, quaerat quisquam.</p>
        <button className='btn btn-warning rounded mt-4'><Link to={'/home'} style={{textDecoderation:'none',color:'white'}}>Get Started  </Link></button>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 d-flex justify-content-center align-items-center">
        <img src="../music-beat.gif" alt="no-image" className='w-75' />
      </div>
    </div>

    <div className="row w-100 mt-5">
      <h3 className='mt-5 text-center mb-5'>Features</h3>
      <div className="col-md-1"></div>
      <div className="col-md-3 px-5 px-md-5 mt-3">
        <Card style={{ width:'100%'}} className='ms-4 p-3'>
          <Card.Img varient="top" src="../img1.avif" className='w-100' height={"300px"}/>
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus optio maiores sequi quibusdam porro nesciunt minus.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-3 px-5 px-md-5 mt-3">
      <Card style={{ width:'100%'}} className='ms-4 p-3'>
          <Card.Img varient="top" src="./img2.jpg" className='w-100' height={"300px"}/>
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus optio maiores sequi quibusdam porro nesciunt minus.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-3 px-5 px-md-5 mt-3">
      <Card style={{ width:'100%'}} className='ms-4 p-3'>
          <Card.Img varient="top" src="./img3.jpg" className='w-100'height={"300px"} />
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus optio maiores sequi quibusdam porro nesciunt minus.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-1"></div>
    </div>

    <div className="row w-100 mt-5 mb-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 border p-5 rounded mt-5">
        <div className="row w-100">
          <div className="col-md-6">
            <h3 className='text-warning mt-3'>Simple Fast and Powerfull</h3>
            <p className='mt-4'><span className='fs-4'>Play Everything:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio inventor.</p>
            <p className='mt-4'><span className='fs-4'>Play Everything:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio inventor.</p>
            <p className='mt-4'><span className='fs-4'>Play Everything:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio inventor.</p>
          
          </div>
          <div className="col-md-6">
          <iframe width="560" height="415" src="https://www.youtube.com/embed/AFTIVN8rRbI?si=B6vrh0IgeoB2OmcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

      </div>
      <div className="col-md-1"></div>

    </div>
    </>
  )
}

export default Landing