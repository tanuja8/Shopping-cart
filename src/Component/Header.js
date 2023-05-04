import React from 'react'
import { Navbar,Container, FormControl, Nav, Badge,Dropdown } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <Navbar bg='dark' variant='dark' style={{height:80}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl style={{width:500}} placeholder='Search a product' className='m-auto'/>
        </Navbar.Text>
        <Nav>
          <Dropdown  alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px"></FaShoppingCart>
              <Badge bg='success'>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minwidth:370}}>
              <span style={{padding:10}}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
    <div>
      
    </div>
    </>
  )
}

export default Header
