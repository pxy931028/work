var express =require("express");
var path=require("path")
var app=express();
// var pub = path.join(__dirname,"public")
app.use(express.static(path.join(__dirname,"public")));
app.listen(3000,function(){
	console.log("服务器已启动！");
})