var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	routes = require('./routes/index'),
	login = require('./routes/login');


app.set('port', 3000); // 设置端口号
app.set('view engine', 'jade'); // 设置模板引擎
app.use(bodyParser()); // 资源解析器
app.use(methodOverride());
app.use(express.static('public')); // 设置全局资源路径

app.use('/', routes); // 默认路由
app.use('/', login); // 登录路由

app.listen(app.get('port'));