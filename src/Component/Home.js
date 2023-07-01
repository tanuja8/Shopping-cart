import React from 'react'
import { CartState } from './Context/Context'
import Singleproduct from './Singleproduct';
import "./Style.css";
import Filter from './Filter';
// import { useState } from 'react';

const Home=() => {
  const {
    state:{products},
    productState:{sort,byStock,byFastDelivery,byRating,searchQuery},}=CartState();
      //  const [sort, setSort] = useState("");

    const transformProducts=()=>{
      let sortedProducts=products;
      if(sort){
        sortedProducts=sortedProducts.sort((a,b)=>(
          sort==="lowToHigh"?a.price-b.price:b.price-a.price
        ))
      }
      if(!byStock){
        sortedProducts=sortedProducts.filter((prod)=> prod.inStock);
      }
      if(!byFastDelivery){
        sortedProducts=sortedProducts.filter((prod)=> prod.fastDelivery);
      }
      if(byRating){
        sortedProducts=sortedProducts.filter((prod)=> prod.ratings >=byRating);
      }
      if(searchQuery){
        sortedProducts=sortedProducts.filter((prod)=> prod.name.toLowerCase().includes(searchQuery));
      }
      return sortedProducts;
    }
  // console.log(products);
  return (
<div className='home'>
  <Filter></Filter>
  <div className='productContainer'>
  {transformProducts().map((prod)=>{
    return<h6><Singleproduct prod={prod} key={prod.id}>
      </Singleproduct></h6>
  })}
</div>
</div>
  )
}

export default Home


