const router = require('express').Router()

const { findAllCars, getCarById, createNewCar, deleteCar, updateCar, carPage} = require("../controller/carController");

router.get("/", carPage);
router.get("/cars", findAllCars);
router.get('/cars/:id', getCarById);
router.post('/cars', createNewCar);
router.delete('/cars/:id', deleteCar);
router.put('/cars/:id', updateCar);

module.exports = router