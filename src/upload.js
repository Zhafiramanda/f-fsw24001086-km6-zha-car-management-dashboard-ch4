const multer = require("multer");
const path = require("path");

const publicDirectory = path.join(__dirname, "public");
const uploadDirectory = path.join(publicDirectory, "uploads");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const setDir = uploadDirectory + "\\..\\..\\..\\public\\uploads\\";
        cb(null, setDir);
    },

    filename: function (req, file, cb) {
        const getFileName = file.originalname.slice(0, -4);
        cb(null, getFileName + path.extname(file.originalname));
    },
});

module.exports = multer({ storage });