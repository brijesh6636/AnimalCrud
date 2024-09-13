// src/components/crud/AddAnimal.js
import React, { useState } from 'react';
import axios from 'axios';
import { BACKENDPORT } from '../envHelper';

const AddAnimal = () => {
  const [newAnimal, setNewAnimal] = useState({ name: '', species: '', age: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal({ ...newAnimal, [name]: value });
  };

  const addAnimal = async () => {
    try {
      await axios.post(`${BACKENDPORT}`, newAnimal);
      setNewAnimal({ name: '', species: '', age: '' });
      setStatus('Animal added successfully!');
    } catch (error) {
      console.error('Error adding animal:', error);
      setStatus('Error adding animal. Please try again.');
    }
  };

  return (
    <div className='mb-6 p-4 bg-white shadow-md rounded'>
      <h2 className='text-2xl font-bold mb-4'>Add New Animal</h2>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-sm font-medium mb-1'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Name'
          value={newAnimal.name}
          onChange={handleInputChange}
          className='border p-2 w-full rounded'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='species' className='block text-sm font-medium mb-1'>Species</label>
        <input
          id='species'
          type='text'
          name='species'
          placeholder='Species'
          value={newAnimal.species}
          onChange={handleInputChange}
          className='border p-2 w-full rounded'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='age' className='block text-sm font-medium mb-1'>Age</label>
        <input
          id='age'
          type='number'
          name='age'
          placeholder='Age'
          value={newAnimal.age}
          onChange={handleInputChange}
          className='border p-2 w-full rounded'
        />
      </div>
      <button 
        onClick={addAnimal} 
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
      >
        Add Animal
      </button>
      {status && (
        <div className={`mt-4 p-2 ${status.startsWith('Error') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'} rounded`}>
          {status}
        </div>
      )}
    </div>
  );
};

export default AddAnimal;
