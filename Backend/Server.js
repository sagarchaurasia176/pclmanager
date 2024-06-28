const express = require('express');
const app = express()
const PORT = process.env.PORT || 8000;
// listen port apply here
app.listen(PORT, () => {
  console.log("server is running at port" + { PORT });
});
// passed the middlware here so we get
app.use(express.json());