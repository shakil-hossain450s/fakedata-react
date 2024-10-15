import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ item: product, index, deleteItem }) => {
    const {title, price } = product;
    return (
        <div className='flex items-center gap-2'>
            <div className='bg-gray-200 w-full px-2 py-1 my-2 rounded'>
                <div className='flex justify-between text-center font-medium '>
                    <h2>
                        <span className='mr-1'>{index+1}.</span>
                        {title.slice(0, 10)}</h2>
                    <h2>${price}</h2>
                </div>
            </div>
            <button
                onClick={() => deleteItem(product)}
                className='btn btn-sm btn-circle text-white text-lg bg-red-600 hover:bg-red-600 flex justify-center items-center'>
                <MdDelete></MdDelete>
            </button>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

export default CartItem;