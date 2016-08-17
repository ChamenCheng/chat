var express = require('express'),
    router = express.Router();

router.get('/login', function(req, res, next) {
	res.render('login', {
		title: 'Login'
	});
});

module.exports = router;