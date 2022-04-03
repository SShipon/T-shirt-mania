import React from 'react';
import './Cart.css'
const Cart = ({ cart, handelRemoveCart }) => {

    let command;
    if (cart.length === 0) {
        command= <p>Please one items add</p>
    }
    else if (cart.length === 1) {
        command=<p>please add more ....</p>
    }
    else {
        command=<p>thanks for your items</p>
    }
  return (
    <div>
      <h1>items add:{cart.length}</h1>

      {cart.map((shirt) => (
        <p>
          {shirt.name}
          <button onClick={() => handelRemoveCart(shirt)}>X</button>
        </p>
      ))}
          {cart.length ===0 || <p className='add'>Yha Yha are bing</p>}
          {cart.length === 3 && <div className='sortHand'>
              <p>3 items add </p>
              <h2>Thank you bro</h2>
          </div>}
          {command}
          {cart.length !== 4 ? <p>add more 4 items</p> : <button>all remove</button>}
          {cart.length===4 && <button className='btn-hero'>order review</button>}
    </div>
  );
};

export default Cart;