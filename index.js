require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 8000;

const router = require("./routes/carRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(flash());
app.use(router);

// Static files
app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

