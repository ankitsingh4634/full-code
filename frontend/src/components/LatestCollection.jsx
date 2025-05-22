import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import CollectionItem from './CollectionItem';

const LatestCollection = () => {
  const { collections } = useContext(ShopContext);
  const [latestCollections, setLatestCollections] = useState([]);

  useEffect(() => {
    // Getting the latest collections and the number of products in each collection
    const updatedCollections = collections?.map((collection) => ({
      ...collection,
      productCount: collection.items?.length, // Count products
    }));
    setLatestCollections(updatedCollections);
  }, [collections]);


  console.log("Latest Collections: ", latestCollections);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"OUR"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Steve's Blankets collection products are listed here for you
        </p>
      </div>

      {/* Rendering Collections */}
      <div style={{overflow:"hidden"}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestCollections?.map((collection, index) => (
          <div key={index} className="collection-item">
            {/* <h2>{collection.name}</h2>
            <p>Total Products: {collection.productCount}</p> */}
            {/* Render the products inside the collection */}
            <CollectionItem
                key={index}
                collection={collection}
                total={collection.productCount}
                name={collection.name}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
