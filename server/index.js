const express = require("express");
const usersRoutes = require("./routes/api.users.routes");
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(usersRoutes);

app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
