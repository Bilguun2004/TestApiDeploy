const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// Define a sample API endpoint
app.use(cors());
app.get("/api/sample", (req, res) => {
	const data = {
		message: "Hello, this is a sample API!",
		timestamp: new Date().toISOString(),
	};
	console.log(data);
	res.json(data);
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
