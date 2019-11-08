import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';

import './TopBar.css';

const TopBar = () => {
  console.log('topbar');
  const { pathname } = location;

  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
      <Navbar.Brand href='#home'>Scrolling App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/' active={pathname == '/'}>
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(TopBar);
