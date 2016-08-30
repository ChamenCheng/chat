var express = require('express'),
    router = express.Router();

router.get('/home', function(req, res) {
    if (req.session.user) {
        res.render('home');
    } else {
        req.session.error = '请先登录';
        res.redirect('login');
    }
});