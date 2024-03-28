const express = require("express");
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 8000; 

const router = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
  const msg = "";
  res.render("index", { msg: msg });
});

app.use(express.static('public'));


// Gunakan EJS Layouts
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
