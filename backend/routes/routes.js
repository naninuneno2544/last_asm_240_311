const express = require('express');

const router = express.Router()

const Model = require('../models/model');

module.exports = router;

router.post('/post', async (req, res) => {
    const data = new Model({
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        price: req.body.price,
        image: req.body.image
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:_id', async (req, res) => {
    try{
        const data = await Model.findById(req.params._id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            _id , updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const data = await Model.findByIdAndDelete(_id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// Route to Homepage
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });

// Route to Login Page
router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
  });

router.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });
