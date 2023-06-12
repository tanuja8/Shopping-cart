import React from 'react'
import { CartState } from './Context/Context'
import Singleproduct from './Singleproduct';
import "./Style.css";
import Filter from './Filter';

const Home=() => {
  const {
    state:{products},}=CartState();
  console.log(products);
  return (
<div className='home'>
  <Filter></Filter>
  <div className='productcontainer'>
  {products.map((prod)=>{
    return<h6><Singleproduct prod={prod} key={prod.id}>
      </Singleproduct></h6>
  })}
</div>
</div>
  )
}

export default Home
