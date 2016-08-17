var express = require('express'),
	app = express();

app.set('port', 3000); // 设置端口号
app.set('view engine', 'jade'); // 设置模板引擎

// 设置路由
app.get('/', function(req, res) {
	res.send('hello');
});

app.listen(app.get('port'));