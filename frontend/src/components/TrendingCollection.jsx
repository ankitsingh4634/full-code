import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import CollectionItem from './CollectionItem';

const TrendingCollection = () => {
  const { collections } = useContext(ShopContext);
  const [latestCollections, setLatestCollections] = useState([]);

  useEffect(() => {
    const updatedCollections = collections?.map((collection) => ({
      ...collection,
      productCount: collection.items?.length,
    }));
    setLatestCollections(updatedCollections?.slice(0, 8)); // Show top 8 collections
  }, [collections]);

  return (
    <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-14 lg:mb-20 text-center">
          <Title text1="Curated Comfort" text2="Featured Collections" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 font-light">
            Discover handcrafted luxury in every thread - explore our premium blanket collections
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {latestCollections?.map((collection) => (
            <CollectionItem
              key={collection.id}
              collection={collection}
              productCount={collection.productCount}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-100 to-transparent opacity-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-rose-100 to-transparent opacity-20 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default TrendingCollection;