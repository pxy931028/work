var express=require("express");
var path=require("path")
var app=express();
app.use(express.static(path.join(__dirname ,"public")));
app.set("view engine","jade");
app.get("/",function(req,res){
	res.render("home")
})
app.get("/video",function(req,res){
	res.render("video")
})
app.get("/table",function(req,res){
	var  arr=[{"name":"李欣",age:23,sex:"female"},
	         {"name":"李磊",age:25,sex:"male"},
	         {"name":"李欢",age:29,sex:"female"},
	         {"name":"张三",age:23,sex:"male"},
	         {"name":"王明",age:26,sex:"male"},
	         {"name":"李军",age:29,sex:"female"}]
	res.render("table",{"arr":arr})
})
app.listen(3000,function(){
	console.log("服务器已经启动");
})