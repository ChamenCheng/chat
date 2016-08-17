var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');


app.set('port', 3000); // 设置端口号
app.set('view engine', 'jade'); // 设置模板引擎
app.use(bodyParser()); // 资源解析器
app.use(methodOverride());
app.use(express.static('public')); // 设置全局资源路径

// 设置默认路由
app.get('/', function(req, res) {
	res.render('index', {
		title: 'Home',
		message: 'test'
	});
});

// 设置登录路由
app.get('/login', function(req, res) {
	res.render('login', {
		title: 'Login'
	});
});

app.listen(app.get('port'));