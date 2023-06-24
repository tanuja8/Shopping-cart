import React from 'react'
import { CartState } from './Context/Context'
import { ListGroup } from 'react-bootstrap';

const Cart = () => {
  const{
    state:{cart},
    dispatch,
  } =CartState();
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
      </div>
    </div>
  )
}

export default Cart
