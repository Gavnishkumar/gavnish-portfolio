import { Avatar } from '@chakra-ui/react';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const navelestyle={"marginLeft": '20px','padding':'10px','borderRadius':'10px',"&:hover":{background:'grey'}}
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Avatar name={"Gavnish kumar"} src={'https://ik.imagekit.io/gavnish/test-upload_CiFZbPc0-.png?updatedAt=1691840962857'}  style={{'margin': '0px 2em'}}/>
        <Navbar.Brand href="home" style={{'marginLeft':'0px','fontFamily':'cursive'}} >Gavnish Kumar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navlinks" to="/" style={navelestyle}><i>Home</i></Link>
            <Link className="navlinks" to="/education" style={navelestyle}><i>Education</i></Link>
            <Link className="navlinks" to="/skills" style={navelestyle}><i>Skills</i></Link>
            <Link className="navlinks" to="/projects" style={navelestyle}><i>Projects</i></Link>
            <Link className="navlinks" to="/contact" style={navelestyle}><i>Contact</i></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </>
  );
}

 

export default MyNavbar
