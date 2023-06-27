import React, { useEffect, useState } from 'react'
import { CartState } from './Context/Context'
import { Button, Col, ListGroup, Row ,Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai';

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
    <div className='  home'>
      <div className=' productContainer'>
      <ListGroup>
        {
          cart.map(prod=>(
            <ListGroup.Item key={prod.id}>
              <Row>
              <Col md={2}>
                <Image src={prod.image} alt={prod.name} fluid rounded></Image>
              </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                <Rating rating={prod.ratings}></Rating> </Col>
                <Col md={2}>
                  <Form.Control as="select" value={prod.qty}>
                    {[...Array(prod.inStock).keys()].map((x)=>(
                      <option key={x + 1}>{}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button type='button' variant='light' onClick={()=>
                  dispatch({
                    type:"REMOVE_FROM_CART",
                  })}>
                    <AiFillDelete fontSize="20px"></AiFillDelete>
                  </Button>
                </Col>
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
