import React from 'react'
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import { Button } from 'react-bootstrap';
import { CartState } from './Context/Context';

const Singleproduct = ({ prod }) => {
  const { state: { cart},
  dispatch
  } = CartState();
  console.log(cart)
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivary ? (
              <div>Fast Delivary</div>
            ) : (
              <div>4 days Delivary</div>
            )}
            <Rating rating={prod.ratings}></Rating>
           
          </Card.Subtitle>
          {
            
            cart?.some((p)=>p.id ===prod.id)?(
              <Button 
              onClick={()=>{
                dispatch({
                  type:'REMOVE_FROM_CART',
                  payload:prod,
                });
              }} variant='danger'>
              Remove from cart
            </Button>
            ):(
              <Button 
               onClick={()=>{
                dispatch({
                  type:'ADD_TO_CART',
                  payload:prod
                })
              }}disabled={!prod.inStock}>
            {!prod.inStock ? "out of stock" : "Add to cart"}

          </Button>
            )
            
          }
         
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default Singleproduct
