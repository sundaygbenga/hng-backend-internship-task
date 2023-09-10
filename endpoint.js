const fs = require('fs/promises');
const express = require('express');
const router = express.Router();
const moment = require('moment');

const app = express();
app.use(express.json());
app.use(express.cors());

app.get('/endpoint', (req, res) => {
	// res.send('This is working');
	// const slack_name = req.query.slack_name;
	// const track_name = req.query.track;
	const track_name = 'Backend';
	const data = {
		slackName: track_name,
		currentDay: moment().format('dddd'),
		utcTIme: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
		track: `${track_name}`,
		githubFileUrl:
			'https://github.com/sudaygbenga/hng-backend-internship-task/endpoint.js',
		githubRepoUrl: 'https://github.com/sudaygbenga/hng-backend-internship-task',
		statusCode: 200,
	};

	res.json(data);
});

app.listen(3500, () => console.log('API Server is running...'));

module.exports = app;
