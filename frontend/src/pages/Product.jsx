import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { v4 as uuidv4 } from 'uuid';

const Product = () => {
  const { collections } = useContext(ShopContext);
  const location = useLocation();
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const pathParts = location.pathname.split('/');
  const searchParams = new URLSearchParams(location.search);
  const productName = decodeURIComponent(pathParts[pathParts.length - 1]);
  const collectionName = decodeURIComponent(searchParams.get('collectionName'));
  const index = searchParams.get('index');
  const index2 = searchParams.get('index2');

  const [currentCollection, setCurrentCollection] = useState(null);
  const [remainingItems, setRemainingItems] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [parentProduct, setParentProduct] = useState(null);
  const [size, setSize] = useState('');
  const [addedToCart, setAddedToCart] = useState(false); // State to track button text
  const uniqueCartId = uuidv4();
  // Fetch initial product
  const fetchProductData = async () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      // Not used much because we rely on collection
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Fetch product from collection
  useEffect(() => {
    const collection = collections.find(col => col.name === collectionName);
    if (collection) {
      setCurrentCollection(collection);

      const selectedProduct = collection.items[index]?.products[index2];
      setCurrentProduct(selectedProduct);

      const otherProducts = collection.items[index]?.products.filter((_, i) => i !== parseInt(index2));
      setRemainingItems(otherProducts);

      setParentProduct(collection.items[index]);
    }
  }, [collections, collectionName, index, index2]);

  // If user clicks another image, update whole currentProduct
  const handleImageClick = (item) => {
    setCurrentProduct(item);
  };

  // Handle add to cart button click
  const handleAddToCart = () => {
    console.log('Adding to cart:', {...currentProduct, parentProductName: parentProduct?.name});
    addToCart(`${encodeURIComponent(`${currentProduct.name} ${parentProduct?.name}`)}`, {...currentProduct, parentProductName: parentProduct?.name});
    setAddedToCart(true); // Set state to show "Added" and checkmark
    setTimeout(() => {
      setAddedToCart(false); // Reset after a few seconds
    }, 5000); // Resets after 2 seconds
  };

  return currentProduct ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {remainingItems?.map((item, idx) => (
              <img
                onClick={() => handleImageClick(item)}
                src={item.image}
                style={{
                  filter: "contrast(120%) brightness(110%) saturate(120%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.5))",
                  objectFit: 'cover',
                  imageRendering: 'pixelated',
                  transition: 'filter 0.3s ease',  /* Smooth transition for hover */
                }}
                key={idx}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:opacity-70'
                alt=""
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img
              className='w-full h-auto'
              style={{
                filter: `contrast(125%) brightness(110%) saturate(120%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.4))`,
                maxWidth: '29rem',  /* Adjust as needed */
                height: 'auto',
                objectFit: 'cover',
                imageRendering: 'pixelated',
                transition: 'filter 0.3s ease',  /* Smooth transition for hover */
              }}
              src={currentProduct.image}
              alt=""
              onMouseEnter={(e) => {
                e.target.style.filter = 'contrast(135%) brightness(115%) saturate(130%) drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))';
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = 'contrast(125%) brightness(110%) saturate(120%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.4))';
              }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>
            {currentProduct.name} ({parentProduct?.name})
          </h1>
          <p className='mt-5 text-3xl font-medium'>
            USD {currentProduct.price}
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>
            {parentProduct?.description}
          </p>

          <div className='flex flex-col gap-4 my-8'>
            {/* Uncomment this when sizes are available */}
            {/* <div className='flex gap-2'>
              {currentProduct.sizes?.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div> */}
          </div>

          <button
            onClick={handleAddToCart}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            {addedToCart ? (
              <span>
                <span className="mr-2">Added</span>
                <i style={{fontSize:"16px", position:"relative", top:"1px"}} className="fa fa-check-circle"></i> {/* Checkmark icon */}
              </span>
            ) : (
              'ADD TO CART'
            )}
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet...</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations...</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={currentProduct.category} subCategory={currentProduct.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
