require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });

const FruitSchema = new mongoose.Schema({ name: String });
const Fruit = mongoose.model('Fruit', FruitSchema, 'fruitlist');

app.get("/fruitlist", async (req, res) => {
    try {
        const fruits = await Fruit.find().select('-__v');
        res.json(fruits);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch fruit list' });
    }
});

app.post("/addfruits", async (req, res) => {
    try {
        const newFruit = new Fruit({ name: req.body.newfruit });
        const savedFruit = await newFruit.save();
        res.status(201).json(savedFruit);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add fruit' });
    }
});

app.listen(5000, () => console.log("Server started on port 5000..."));
