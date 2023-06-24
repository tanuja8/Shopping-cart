import React, { useEffect, useState } from 'react'
import { CartState } from './Context/Context'
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import Rating from './Rating'

const Cart = () => {
  const{
    state:{cart},
    dispatch,
  } =CartState();

  const [total,setTotal]=useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price),0));
  },[cart]);
  return (
    <div className='home'>
      <div className='productcontainer'>
      <ListGroup>
        {
          cart.map(prod=>(
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                <Rating rating={prod.ratings}></Rating> </Col>
              </Row>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      </div>
      <div className='filter summary'>
        <span className='title'>Subtotal({cart.length}) items</span>
        <span style={{fontWeight:700,fontSize:20}}>Total: ₹ {total}</span>
        <Button type='button' disabled={cart.length==0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart
