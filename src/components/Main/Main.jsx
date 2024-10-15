import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Main = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const isExist = cart.find(p => p.id === product.id);
        if (!isExist) {
            const newCart = [...cart, product];
            setCart(newCart);
        } else {
            return alert("Already in cart")
        }
    }

    const deleteItem = (product) => {
        const remainingCart = cart.filter(item => item.id !== product.id);
        setCart(remainingCart);
    }

    // console.log(cart);
    return (
        <div className='flex justify-between gap-8'>
            <Products
                handleAddToCart={handleAddToCart}
            ></Products>
            <Cart
                cart={cart}
                deleteItem={deleteItem}
            ></Cart>
        </div>
    );
};

export default Main;