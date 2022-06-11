const { setupRoutes } = require("./routes");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.use(express.json());

setupRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
