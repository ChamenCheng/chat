var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next) {
	res.render('login', {
		title: 'Login'
	});
});

router.post('/', function(req, res, next) {
	console.log(req.username);
	if (req.username === 'admin') {
		res.send('success!');
	}
});

module.exports = router;
