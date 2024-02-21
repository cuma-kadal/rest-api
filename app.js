const express = require("express");

const app = express();
const PORT = 4000;
const proses_message = {
  creator: 'RynXD',
  message: 'Request akan segera diexecute, pantau secara berkala.'
};
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
 res.status(400).send(JSON.stringify(proses_message, null, 2));
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
