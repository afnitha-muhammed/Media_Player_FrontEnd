import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faVideo } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <Navbar className="bg-tranperant border" >
    <Container>
      <Navbar.Brand>
        <FontAwesomeIcon icon={ faVideo } beat style={{color: "#FFD438",}} size='lg' />
        <h5 className="text-warning ms-3">Media Player</h5>
      </Navbar.Brand>
    </Container>
  </Navbar>
   
  )
}

export default Header