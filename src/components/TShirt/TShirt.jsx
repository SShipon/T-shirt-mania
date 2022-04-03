import React from 'react';
import './TShirt.css'
const TShirt = ({ handleAddToCart, shirt }) => {
  //const { handleAddToCart, shirt } = props;
  const { picture, name, price, gender } =shirt;
  return (
    <div className="t-Shirt-container">
      <img src={picture} alt="" />
      <p>{name}</p>
      <p>price: ${price}</p>
      <button onClick={() => handleAddToCart(shirt)}>add To cart</button>
    </div>
  );
};

export default TShirt;