// src/components/crud/AnimalManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKENDPORT } from '../envHelper';
import Shimmer from '../components.js/Shimmer';

const AnimalUpdate = () => {
    const [animals, setAnimals] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [animalData, setAnimalData] = useState({ name: '', species: '', age: '' });

    // Fetch all animals when the component mounts
    useEffect(() => {
        fetchAnimals();
    }, []);

    const fetchAnimals = async () => {
        try {
            const response = await axios.get(`${BACKENDPORT}`);
            setAnimals(response.data);
        } catch (error) {
            console.error('Error fetching animals:', error);
        }
    };

    // Handle the double-click on an animal card to open the editor
    const handleEdit = (animal) => {
        setSelectedAnimal(animal);
        setAnimalData(animal); // Pre-fill the form with the selected animal data
    };

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnimalData({ ...animalData, [name]: value });
    };

    // Update the animal's details
    const updateAnimal = async () => {
        try {
            await axios.put(`${BACKENDPORT}/${selectedAnimal._id}`, animalData);
            alert('Animal updated successfully');
            setSelectedAnimal(null); // Close modal on success
            fetchAnimals(); // Refresh the animals list
        } catch (error) {
            console.error('Error updating animal:', error);
        }
    };

    return animals.legth ? <Shimmer/> : (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Double Clikk to update</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {animals.map(animal => (
                    <div
                        key={animal._id}
                        className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition cursor-pointer"
                        onDoubleClick={() => handleEdit(animal)}
                    >    {animal.imageUrl && (
                        <img
                          src={animal.imageUrl}
                          alt={animal.name}
                          className='w-full h-48 object-cover rounded mb-4'
                        />
                      )}
                        <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
                        <p><strong>Description:</strong> {animal.species}</p>
                        <p><strong>Age:</strong> {animal.age}</p>
                    </div>
                ))}
            </div>

            {/* Modal for editing an animal */}
            {selectedAnimal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Animal</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={animalData.name}
                            onChange={handleInputChange}
                            className="border p-2 w-full mb-2"
                        />
                        <input
                            type="text"
                            name="species"
                            placeholder="Species"
                            value={animalData.species}
                            onChange={handleInputChange}
                            className="border p-2 w-full mb-2"
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={animalData.age}
                            onChange={handleInputChange}
                            className="border p-2 w-full mb-4"
                        />
                        <div className="flex justify-between">
                            <button 
                                onClick={updateAnimal} 
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                            >
                                Update Animal
                            </button>
                            <button 
                                onClick={() => setSelectedAnimal(null)} 
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnimalUpdate;
