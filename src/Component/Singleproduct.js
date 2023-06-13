import React from 'react'
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

const Singleproduct = ({prod}) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivary ?(
              <div>Fast Delivary</div>
            ):(
              <div>4 days Delivary</div>
            )}
            <Rating rating={prod.ratings}></Rating>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Singleproduct
