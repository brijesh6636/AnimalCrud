import express from 'express'
import { Animal } from './model.schema.js';

const router = express.Router()

router.delete('/deleteAll', async (req, res) => {
    console.log('deleteAll');
    try {
        await Animal.deleteMany({}); // Delete all documents in the Animal collection
        res.status(204).send(); // No content, successful operation
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET all animals
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new animal
router.post('/', async (req, res) => {
  const animal = new Animal(req.body);
  try {
    const newAnimal = await animal.save();
    res.status(201).json(newAnimal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) an existing animal
router.put('/:id', async (req, res) => {
    console.log(req.body); // Logs the incoming request body for debugging
  
    try {
      // Update the animal and return the updated document
      const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
      
      if (!updatedAnimal) {
        return res.status(404).json({ message: 'Animal not found' });
      }
  
      res.json(updatedAnimal);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

// DELETE an animal
router.delete('/:id', async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.delete('/deleteAll', async (req, res) => {
//     console.log('deleteAll')
//     try {
//         await Animal.deleteMany({}); // Delete all documents in the Animal collection
//         res.status(204).send(); // No content, successful operation
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });
  
  export default router;