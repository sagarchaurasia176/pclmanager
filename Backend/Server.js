const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
let cors = require("cors");
app.use(cors());

let corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET , POST,PUT,PATCH,DELETE,HEAD",
  Credential: true,
};

// listen port apply here
app.listen(PORT, () => {
  console.log(` server running at this ${PORT}`);
});
// passed the middlware here so we get
app.use(express.json());
// const db connection
const dbConnection = require("./config/DbConnection");
dbConnection();

// routes
const StudentRoutes = require("./routes/LoginRoutes");
app.use("/StudentRoutes", StudentRoutes);
