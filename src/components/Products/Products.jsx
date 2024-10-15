import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Products = ({handleAddToCart}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-8/12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    products.map((product, idx) => <Product 
                        key={idx} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
        </div>
    );
};

Products.propTypes = {
    handleAddToCart: PropTypes.func
}

export default Products;