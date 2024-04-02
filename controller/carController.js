const { Car } = require("../models");

const carPage = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.render("index", { layout: 'layout/main'});
  } catch (err) {
    res.render("error", {
      message: err.message,
    });
  }
};

const findAllCars = async (req, res) => {
  try {
    const data = await Car.findAll();

    const result = {
      status: "oke",
      data: data,
    };
    res.json(result);
  } catch (error) {
    console.log(error, "<<< error find all cars");
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Car.findByPk(id);
    if (!data) {
      return res.status(404).json({
        status: "failed",
        message: `Data car with id ${id} is not found`,
        data: null,
      });
    }
    res.json({ status: "ok", data: data });
  } catch (error) {
    console.log(error, "<< error get car by id");
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

const createNewCar = async (req, res) => {
  try {
    const { id, name, image, price, size } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID cannot be null" });
    }

    const newCar = await Car.create({ id, name, image, price, size });

    // Mengirimkan respons status 201 (Created) dengan data mobil yang baru dibuat
    return res.status(201).json({
      status: "success",
      data: {
        id: newCar.id,
        name: newCar.name,
        image: newCar.image,
        price: newCar.price,
        size: newCar.size,
        createdAt: newCar.createdAt,
        updatedAt: newCar.updatedAt,
      },
    });
  } catch (error) {
    console.log(error, "<-- error create new car");
    res.status(422).json({
      status: "failed",
      errorMessage: error.message,
    });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Car.findByPk(id);
    if (!data) {
      return res.status(404).json({
        status: "failed",
        message: `Data car with id ${id} does not exist`,
        data: null,
      });
    }

    await data.destroy();

    res.json({
      status: "ok",
      message: `Success delete car with id ${id}`,
    });
  } catch (error) {
    console.log(error, " <-- error delete car");
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, price, size } = req.body;

    let car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({
        status: "failed",
        message: `Data car with id ${id} does not exist`,
        data: null,
      });
    }

    car.name = name;
    car.image = image;
    car.price = price;
    car.size = size;

    await car.validate();
    await car.save();

    res.json({
      status: "success",
      data: {
        id: car.id,
        name: car.name,
        image: car.image,
        price: car.price,
        size: car.size,
        createdAt: car.createdAt,
        updatedAt: car.updatedAt,
      },
    });
  } catch (error) {
    console.log(error, "<-- error update car");
    res.status(422).json({
      status: "failed",
      errorMessage: error.message,
    });
  }
};

module.exports = {
  carPage,
  findAllCars,
  getCarById,
  createNewCar,
  deleteCar,
  updateCar,
};
