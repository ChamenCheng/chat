var express = require('express'),
    router = express.Router();

router.get('/login', function(req, res) {
	res.render('login', {
		title: 'Login'
	});
});

router.post('/login', function(req, res, next) {
	console.log(req.username);
	if (req.username === 'admin') {
		req.session.username = username;
		res.redirect('home');
	} else {
		req.session.error = '用户名不正确';
	}
});

module.exports = router;
