var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	routes = require('./routes/index'),
	login = require('./routes/login'),
	session = require('express-session');


app.set('port', 3000); // 设置端口号
app.set('view engine', 'html'); // 修改模板文件后缀名为html
// 运行ejs模块
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views')); // 设置views变量，意为视图存放的目录
app.use(bodyParser.json()); // 资源解析器
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public'))); // 设置全局资源路径
/*app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitial: false,
	cookie: {
		maxAge: 1000 * 60 * 10
	}
}));*/

app.use('/', routes); // 路由控制

app.listen(app.get('port'));
