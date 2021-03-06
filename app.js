var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');


app.set('port', 3000); // 设置端口号
app.set('view engine', 'jade'); // 设置模板引擎
app.use(bodyParser());
app.use(methodOverride());

// 设置路由
app.get('/', function(req, res) {
	res.render('index', {
		title: 'Home',
		message: 'test'
	});
});

app.listen(app.get('port'));