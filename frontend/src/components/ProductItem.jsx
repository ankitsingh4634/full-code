import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ item, collectionName, index }) => {
  const { currency } = useContext(ShopContext);
  const [validProducts, setValidProducts] = useState([]);

  useEffect(() => {
    // Validate all products by checking their images
    const checkImagesValidity = async () => {
      const validProductsList = await Promise.all(
        item?.products?.map(async (product) => {
          try {
            const image = new Image();
            image.src = product?.image;

            // Wait for image to load
            const imageLoaded = await new Promise((resolve, reject) => {
              image.onload = () => resolve(true);
              image.onerror = () => reject(false);
            });

            // If image is valid, include this product
            return imageLoaded ? product : null;
          } catch (error) {
            return null;
          }
        })
      );

      // Filter out invalid products
      setValidProducts(validProductsList.filter(product => product !== null));
    };

    checkImagesValidity();
  }, [item]);

  return (
    <>
      {validProducts?.map((product, index2) => (
        <Link
          onClick={() => scrollTo(0, 0)}
          className="text-gray-700 cursor-pointer"
          to={`/product/${encodeURIComponent(product?.name)}?collectionName=${encodeURIComponent(collectionName)}&index=${index}&index2=${index2}`}
          key={index2}
        >

          <div className='overflow-hidden'>
            <img style={{ objectFit: "cover", height: "200px" }} className='hover:scale-110 transition ease-in-out' src={product?.image} alt={product?.name} />
          </div>
          <p className='pt-3 pb-1 text-sm'>{product?.name} ({item?.name})</p>
          <p className='text-sm font-medium'>USD {product?.price}</p>
        </Link>
      ))}
    </>
  );
};

export default ProductItem;
