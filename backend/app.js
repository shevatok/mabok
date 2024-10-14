require("dotenv").config();
const expres = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = expres();
const PORT = process.env.PORT || 3001;

app.use(expres.urlencoded({ extended: true }));
app.use(expres.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
