import React from 'react';

function Product(props) {
  return(
    <div>
      <img src={props.image.message} alt="dog" />
      <h1>Dog category</h1>
      <p>Description</p>
      <h3>Price</h3>
    </div>
  )
}

export default Product;