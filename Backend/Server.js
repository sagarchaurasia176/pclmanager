// Import express and store in a constant.
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT_NUM || 8000;
// database here
const db = require("./database/config/PostgresDb");

const initApp = async () => {
  console.log("Testing the database connection..");

  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    /**
     * Start the web server on the specified port.
     */

    app.listen(port, () => {
      console.log(`Server is running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.original);
  }
};

/**
 * Initialize the application.
 */
initApp();
