// src/components/crud/GetAnimals.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKENDPORT } from '../envHelper';

const GetAnimals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get(`${BACKENDPORT}`); // Ensure the correct endpoint
      setAnimals(response.data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  console.log(animals);

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <h2 className='text-4xl font-extrabold mb-8 text-center text-indigo-900'>All Animals</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {animals && animals.map(animal => (
          <div
            key={animal._id}
            className='bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out'
          >
            {animal.imageUrl && (
              <img
                src={animal.imageUrl}
                alt={animal.name}
                className='w-full h-48 object-cover rounded mb-4'
              />
            )}
            <h3 className='text-2xl font-semibold mb-4 text-gray-800'>{animal.name}</h3>
            <p className='text-gray-600 mb-2'>
              <strong className='text-gray-900'>Species:</strong> {animal.species}
            </p>
            <p className='text-gray-600'>
              <strong className='text-gray-900'>Age:</strong> {animal.age}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAnimals;
