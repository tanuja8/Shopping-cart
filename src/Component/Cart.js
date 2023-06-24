import React, { useEffect, useState } from 'react'
import { CartState } from './Context/Context'
import { Button, ListGroup } from 'react-bootstrap';

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
            <span>{prod.name}</span>
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
