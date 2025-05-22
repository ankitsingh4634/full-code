import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CollectionItem = ({ name, total, collection }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Image handling with skeleton loading
  const productImages = collection?.items
    ?.slice(0, 4)
    ?.map(item => item?.products?.[0]?.image)
    ?.filter(Boolean);

  const images = productImages?.length > 0 
    ? productImages 
    : Array(4).fill(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card container */}
      <Link
        to={`/collection/${encodeURIComponent(name)}`}
        onClick={() => window.scrollTo(0, 0)}
        className="block relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* Static image grid */}
        <div className="w-full aspect-square grid grid-cols-2 gap-0.5 overflow-hidden rounded-t-xl">
          {images.slice(0, 4).map((image, index) => (
            <div 
              key={`${name}-${index}`}
              className="relative w-full h-full"
            >
              {image ? (
                <motion.img
                  src={image}
                  alt={`${name} collection item ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <div className="w-full h-full bg-gray-100 animate-pulse" />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/15" />
            </div>
          ))}
        </div>

        {/* Content section */}
        <div className="p-5 space-y-3">
          <motion.div
            className="flex items-center gap-2"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <span className="text-xs font-medium text-emerald-600 px-2 py-1 bg-emerald-50 rounded-full">
              New
            </span>
          </motion.div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{total} items</p>
            <motion.div
              className="flex items-center gap-1 text-emerald-600"
              animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
              <span className="text-sm font-medium">Explore</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/5"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default CollectionItem;
