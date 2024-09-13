// src/components/Home.js
import React, { useContext } from 'react';
import GetAnimals from '../CRUD/GetAllAnimals';
import AddAnimal from '../CRUD/AddAnimals';
import UpdateAnimal from '../CRUD/UpdateAnimals';
import DeleteAnimal from '../CRUD/DeleteAnimals';
import { Context } from '../App';

const Home = () => {
    const { crudeMode } = useContext(Context);

    return (
        <div className="p-6">
            {crudeMode === 'viewAll' && <GetAnimals />}
            {crudeMode === 'add' && <AddAnimal />}
            {crudeMode === 'update' && <UpdateAnimal />}
            {crudeMode === 'delete' && <DeleteAnimal />}
            {/* Render a default message or component if no mode matches */}
            {crudeMode === '' && <p>Select an option from the sidebar.</p>}
        </div>
    );
};

export default Home;
