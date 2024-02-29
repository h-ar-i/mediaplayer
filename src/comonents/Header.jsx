import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <Navbar className="bg-body-info">
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
              <Navbar.Brand className='fw-bolder d-flex align items-center' style={{color:'white'}}>
    
              <i className="fa-solid fa-music fa-beat me-3"></i>
              
               {' '}
                MEDIA-PLAYER

              </Navbar.Brand>
            </Link>
        </Container>
      </Navbar>
  )
}

export default Header