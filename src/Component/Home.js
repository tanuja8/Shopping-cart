import React from 'react'
import { CartState } from './Context/Context'
import Singleproduct from './Singleproduct';
import "./Style.css";
import Filter from './Filter';

const Home=() => {
  const {
    state:{products},}=CartState();
    const transFormProducts=()=>{
      let sortedProducts=products;
      let sort;
      if(sort){
        sortedProducts=sortedProducts.sort((a,b)=>(
          sort==="lowToHigh"?a.price-b.price:b.price-a.price
        ))
      }
      return sortedProducts;
    }
  // console.log(products);
  return (
<div className='home'>
  <Filter></Filter>
  <div className='productContainer'>
  {transFormProducts().map((prod)=>{
    return<h6><Singleproduct prod={prod} key={prod.id}>
      </Singleproduct></h6>
  })}
</div>
</div>
  )
}

export default Home
