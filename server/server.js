const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Define the POST route for "/enroll" before any catch-all route
app.post('/enroll', function(req, res) {
  console.log(req.body);
  res.status(200).send({ "message": "data received" });
});

// Define other routes or middleware below
app.get('/', function(req, res) {
  res.send('Hello from server');
});

// Catch-all route (if needed)
// This route will handle any request that doesn't match the routes defined above
app.use(function(req, res) {
  res.status(404).send("Not Found");
});

app.listen(PORT, function() {
  console.log("Server running on localhost:" + PORT);
});
