import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart, deleteItem }) => {
    return (
        <div className='w-4/12'>
            <div className='bg-gray-400 p-5 text-center text-2xl font-semibold text-white rounded mb-4'>
                <h2>Total in Cart: {cart.length}</h2>
            </div>
            <div className='border-2 p-4 rounded-lg'>
                <div className='px-2 py-1 flex justify-between items-center  text-xl font-medium gap-2'>
                    <div className='w-full flex justify-between'>
                        <h2>Name</h2>
                        <p>Price</p>
                    </div>
                    <div>
                        <p>Act</p>
                    </div>
                </div>
                <div className=''>
                    {
                        cart.map((item, idx) => <CartItem
                            key={idx}
                            item={item}
                            index={idx}
                            deleteItem={deleteItem}
                        ></CartItem>)
                    }
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    deleteItem: PropTypes.func
};

export default Cart;