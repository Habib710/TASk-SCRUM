import React from 'react';
import './Header.css'
import { Nav,Navbar,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='coustom-nav' collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand className=' fs-2' href="#home">SCRUMVERSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto nav-link">
            <Link to='/home'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/courses'>COURSES</Link>
            <Link to='/blogs'>BLOGS</Link>
            
           
           
          </Nav>
          <Nav className='nav-link'>
            <Link className='p-2' to='/login'>Login</Link>
            <Link className='sing-css' to='/signin'>
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;