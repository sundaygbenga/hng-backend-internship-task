const express = require('express');
const router = express.Router();
const moment = require('moment');

router.get('/', (req, res) => {
	const data = {
		slackName: 'Sunfliz',
		currentDay: moment().format('dddd'),
		utcTIme: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
		track: 'Backend Track',
		githubFileUrl:
			'https://github.com/sudaygbenga/hng-backend-internship-task/endpoint.js',
		githubRepoUrl: 'https://github.com/sudaygbenga/hng-backend-internship-task',
		statusCode: 200,
	};

	res.json(data);
});
module.exports = router;
