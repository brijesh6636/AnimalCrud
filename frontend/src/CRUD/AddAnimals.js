// src/components/crud/AddAnimal.js
import React, { useState } from 'react';
import axios from 'axios';
import { BACKENDPORT } from '../envHelper';

const AddAnimal = () => {
  const [newAnimal, setNewAnimal] = useState({ name: '', species: '', age: '' });
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal({ ...newAnimal, [name]: value });
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const addAnimal = async () => {
    setStatus('uploaing please wait....')
    if(!newAnimal.name || !newAnimal.age || !newAnimal.species || !image) return setStatus('Error: All field required')
    const formData = new FormData();
    formData.append('name', newAnimal.name);
    formData.append('species', newAnimal.species);
    formData.append('age', newAnimal.age);
    formData.append('image', image); // Append image file

    try {
      await axios.post(`${BACKENDPORT}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for file upload
        }
      });
      setNewAnimal({ name: '', species: '', age: '' });
      setImage(null);
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
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='species' className='block text-sm font-medium mb-1'>Description</label>
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
      <div>
        <label htmlFor='image' className='block text-gray-700 font-medium mb-2'>
          Upload Image:
        </label>
        <div className='flex items-center'>
          <label className='cursor-pointer bg-gray-200 p-3 rounded-lg flex items-center justify-center border border-dashed border-gray-400 hover:bg-gray-300 transition-colors duration-300'>
            <input
              type='file'
              id='image'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
            />
            <span className='text-blue-500 text-lg font-semibold flex items-center'>
              <svg
                className='h-6 w-6 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 4v16m8-8H4'
                />
              </svg>
              Choose File
            </span>
          </label>
          {image && (
            <span className='ml-4 text-gray-600'>{image.name}</span>
          )}
        </div>
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
