const express = require('express')
const app = express()
const fs = require('fs');

app.use(express.static('project'))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/getArticleList',function(req,res){
	let query = req.query
	let data = JSON.parse(fs.readFileSync("./articleList.json").toString())
	let page = data.totalCount % 10 == 0 ? parseInt(data.totalCount / 10) : parseInt(data.totalCount / 10) + 1
	if(query.page == page) {
		res.send({
			totalCount: data.totalCount,
			items: data.items.slice(0, 5)
		})
	}else {
		res.send({
			totalCount: data.totalCount,
			items: data.items
		})
	}
})
app.get('/getArticleData',function(req,res){
	let query = req.query
	let data = JSON.parse(fs.readFileSync("./articleData.json").toString())
	res.send({
		items: data
	})
})

app.listen(3000, () => console.log('app listening on port 3000!'))