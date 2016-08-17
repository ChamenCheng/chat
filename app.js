var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	routes = require('./routes/index'),
	login = require('./routes/login');


app.set('port', 3000); // 设置端口号
app.set('view engine', 'jade'); // 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser()); // 资源解析器
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public'))); // 设置全局资源路径

app.use('/', routes); // 默认路由
app.use('/login', login); // 登录路由

app.listen(app.get('port'));
