// src/components/crud/Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="animate-pulse bg-gray-200 min-h-screen p-8">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-400">Loading...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 shadow-lg rounded-lg p-6"
          >
            <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
