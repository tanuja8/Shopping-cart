import { faker } from '@faker-js/faker';
import React, { useReducer } from 'react'
import { createContext } from 'react'
import { cartReducer } from './Reducer';
import { useContext } from 'react';

const Cart=createContext();
const Context = ({children}) => {
    const products=[...Array(20)].map(()=>({
        id:faker.string.uuid(),
        name:faker.commerce.product(),
        price:faker.commerce.price(),
        image:faker.image.food(),
        test:faker,
        inStock: faker.random.numeric(),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.random.numeric(),
        
    }));
    const [state,dispatch]=useReducer(cartReducer,{
          products:products,
          Cart:[] 
    })
  return (
    <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;
export const CartState=()=>{
  return useContext(Cart
    )
}
