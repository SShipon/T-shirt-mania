import React, { useState } from 'react';
import useTShirt from '../../Hooks/useTshirt.jsx';
import Cart from '../Cart/Cart.jsx';
import TShirt from '../TShirt/TShirt.jsx';
import './Home.css'

const Home = () => {
    const [tShirt, setTShirt] = useTShirt()
    const [cart, setCart] = useState([])
    
    const handleAddToCart = (selectItem) => {
        const exsit = cart.find((shirt) => shirt._id === selectItem._id);
        if (!exsit) {
            const newCart = [...cart, selectItem];
            setCart(newCart);
        }
        else {
            alert('sorry bro add')
        }
        
    }

    const handelRemoveCart = (selectItem) => {
        const remove = cart.filter((shirt) => shirt._id !== selectItem._id);
        setCart(remove)
    };
      
    return (
        <div className='main-container'>
            <div className='t-shirt-container'>
                
                {
                    tShirt.map(shirt => <TShirt
                        shirt={shirt}
                        key={shirt._id}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                 handelRemoveCart={handelRemoveCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;