import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { Link } from 'react-router-dom';

const LatestCollection = ({ index, index2 }) => {
  const { collections } = useContext(ShopContext);
  const [latestCollections, setLatestCollections] = useState([]);

  useEffect(() => {
    const updated = collections?.map((collection) => ({
      ...collection,
      productCount: collection.items?.length,
    }));
    setLatestCollections(updated);
  }, [collections]);

  const activeCollection = latestCollections?.[index];
  const activeProductGroup = activeCollection?.items?.[index2];
  const products = activeProductGroup?.products || [];

  return (
    <section className="relative z-10 my-20 px-4 sm:px-8 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-14">
        <Title
          text1="OUR"
          text2={`${activeCollection?.name || 'Collection'} Items`}
        />
        {activeProductGroup?.description && (
          <p className="max-w-3xl mx-auto mt-4 text-gray-500 text-base leading-relaxed">
            {activeProductGroup.description}
          </p>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <Link
            key={idx}
            to={`/product/${encodeURIComponent(product?.name)}?collectionName=${encodeURIComponent(activeCollection?.name)}&index=${index2}&index2=${idx}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1"
          >
            <div className="relative w-full h-[280px]">
            <img
  src={product?.image}
  alt={product?.name}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
  style={{
    imageRendering: 'auto',           // Uses browser default which respects image resolution
    backfaceVisibility: 'hidden',     // Reduces blur in some cases
    transform: 'translateZ(0)',       // Promotes to GPU to enhance rendering
  }}
/>

              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product?.name}</h3>
              <p className="text-sm text-gray-500">Price: ${product?.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button
          onClick={() => window.location.replace(`/collection/${encodeURIComponent(activeCollection?.name)}`)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 shadow-lg"
        >
          VIEW ALL {activeCollection?.name} Items
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LatestCollection;
