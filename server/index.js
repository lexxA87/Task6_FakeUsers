const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/api.users.routes");
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(usersRoutes);

app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
