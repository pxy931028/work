var express=require("express");
var path=require("path");
var app=express();
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","jade");
app.get("/home",function(req,res){
	var tit="我的网站"
	// var nav=["视频","主页","图片","音乐"]
	var nav0=[{title:"主页",url:"home"},
			{title:"图片",url:"/picture"},
			{title:"视频",url:"http://www.baidu.com"}]
	res.render("home",{
		"title":tit,
		// "nav":nav
		"nav":nav0
	});
})
app.get("/picture",function(req,res){
	res.end("mypicture")
})
app.get("/page",function(req,res){
	res.end("mypage")
})
app.listen(3000,function(){
	console.log("服务器启动")
})
