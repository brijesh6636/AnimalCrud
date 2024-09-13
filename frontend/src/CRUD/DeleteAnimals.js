// src/components/crud/DeleteAnimal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKENDPORT } from '../envHelper';

const DeleteAnimal = () => {
    const [animals, setAnimals] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

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

    // Handle the click on an animal card to open the delete confirmation
    const handleDeleteClick = (animal) => {
        setSelectedAnimal(animal);
    };

    // Delete the selected animal
    const deleteAnimal = async () => {
        try {
            await axios.delete(`${BACKENDPORT}/${selectedAnimal._id}`);
            alert('Animal deleted successfully');
            setSelectedAnimal(null); // Close modal on success
            fetchAnimals(); // Refresh the animals list
        } catch (error) {
            console.error('Error deleting animal:', error);
        }
    };

    // Delete all animals
    const deleteAllAnimals = async () => {
        try {
            await axios.delete(`${BACKENDPORT}/deleteAll`);
            alert('All animals deleted successfully');
            fetchAnimals(); // Refresh the animals list
        } catch (error) {
            console.error('Error deleting all animals:', error);
        }
    };

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Click to Delete</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {animals.map(animal => (
                    <div
                        key={animal._id}
                        className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition cursor-pointer"
                        onClick={() => handleDeleteClick(animal)}
                    >
                        <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
                        <p><strong>Species:</strong> {animal.species}</p>
                        <p><strong>Age:</strong> {animal.age}</p>
                    </div>
                ))}
            </div>

            {/* Modal for confirming delete action */}
            {selectedAnimal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Delete Animal</h2>
                        <p className="mb-4">Are you sure you want to delete <strong>{selectedAnimal.name}</strong>?</p>
                        <div className="flex justify-between">
                            <button 
                                onClick={deleteAnimal} 
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Delete Animal
                            </button>
                            <button 
                                onClick={() => setSelectedAnimal(null)} 
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Button to delete all animals */}
            <div className="text-center mt-6">
                <button
                    onClick={deleteAllAnimals}
                    className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
                >
                    Delete All Animals
                </button>
            </div>
        </div>
    );
};

export default DeleteAnimal;
