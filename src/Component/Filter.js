import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Rating from './Rating';

const Filter = () => {
    const [rate,SetRate]=useState(2)
  return (
    <div className='filter'>
    <h3 className='title'>Filter Products</h3>
    <span>
    <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
          />
    </span>
    <span>
    <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
          />
    </span>
    <span>
    <Form.Check
            inline
            label="Include out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
          />
    </span>
    <span>
    <Form.Check
            inline
            label="Fast Delevery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
          />
    </span>
   
    <span>
    <label style={{padding:10}}>Rating:</label>
        <Rating 
        rating={rate}
        onclick={(i)=>SetRate(i+1)} 
        style={{cursor:"pointer"}}></Rating>
    </span>
    <Button variant='light'> Clear Filter</Button>
    </div>
  )
}

export default Filter
