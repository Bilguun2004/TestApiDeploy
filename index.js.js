const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const port = 3000;

app.use(express.json());

const Numerology = async (paramValue) => {
	try {
		const options = {
			method: "GET",
			url: "https://horoscope-astrology.p.rapidapi.com/numerology",
			params: paramValue,
			headers: {
				"X-RapidAPI-Key": "13f0abee3amshdcb6be2d033767bp191d2djsn824c023866eb",
				"X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
				"Content-Type": "application/json",
			},
		};
		return axios.request(options);
	} catch (error) {
		console.error(error);
		throw error;
	}
};

app.use(cors());
app.post("/api/sample", async (req, res) => {
	try {
		const paramValue = req.body;
		const response = await Numerology(paramValue);
		console.log(paramValue);

		const data = {
			message: response.data.desc,
		};

		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Internal Server Error"});
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
