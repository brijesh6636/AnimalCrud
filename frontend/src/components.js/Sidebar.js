import React, { useContext, useState } from 'react';
import { Context } from '../App';

function Sidebar() {

  const { crudeMode , setCrudeMode } = useContext(Context)
  const [selectedOption, setSelectedOption] = useState('viewAll');

  const handleClick = (option) => {
    setSelectedOption(option);
    setCrudeMode(option)
  };

  return (
    <div className="sidebar w-64 h-screen bg-gray-900 text-white p-6 flex flex-col shadow-xl">
      <h2 className="text-3xl font-bold mb-10 text-yellow-400">CRUD operations</h2>
      <ul className="flex-1 space-y-4">
        <li
          className={`${selectedOption === 'viewAll' ? 'bg-gray-700 shadow-inner' : ''}`}
          onClick={() => handleClick('viewAll')}
        >
          <div
            className={`block px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
              selectedOption === 'viewAll'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
          >
            View All
          </div>
        </li>
        <li
          className={`${selectedOption === 'add' ? 'bg-gray-700 shadow-inner' : ''}`}
          onClick={() => handleClick('add')}
        >
          <div
            className={`block px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
              selectedOption === 'add'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
          >
            Add
          </div>
        </li>
        <li
          className={`${selectedOption === 'update' ? 'bg-gray-700 shadow-inner' : ''}`}
          onClick={() => handleClick('update')}
        >
          <div
            className={`block px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
              selectedOption === 'update'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
          >
            Update
          </div>
        </li>
        <li
          className={`${selectedOption === 'delete' ? 'bg-gray-700 shadow-inner' : ''}`}
          onClick={() => handleClick('delete')}
        >
          <div
            className={`block px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
              selectedOption === 'delete'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
          >
            Delete
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
