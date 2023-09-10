const fs = require('fs/promises');
const express = require('express');
const router = express.Router();
const moment = require('moment');

const app = express();

app.get('/api', (req, res) => {
	const slack_name = req.query.slack_name;
	const track = req.query.track;

	const data = {
		slack_name: slack_name,
		current_day: moment().format('dddd'),
		utc_tIme: moment().format('YYYY-MM-DDTHH:mm:ss\\Z'),
		track: track,
		github_file_url:
			'https://github.com/sundaygbenga/hng-backend-internship-task/blob/main/endpoint.js',
		github_repo_url:
			'https://github.com/sundaygbenga/hng-backend-internship-task',
		status_code: 200,
	};

	res.json(data);
});

app.listen(3500, () => console.log('API Server is running...'));

module.exports = app;
