import PropTypes from 'prop-types';

const Product = ({ product, handleAddToCart }) => {
    const { title, image, price } = product;
    return (
        <div className="card border-2">
            <figure>
                <img className='rounded w-32 scale-90 object-cover mt-3'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body justify-end">
                <h2 className="card-title mb-3 text-2xl">{title.slice(0, 20)}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolorem maxime consequatur recusandae adipisci illo.</p>
                <div className="card-actions justify-end items-center mt-4">
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <button
                    onClick={() => handleAddToCart(product)}
                        className="btn btn-sm bg-blue-600 hover:bg-blue-600 text-white">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
};

export default Product;