var http=require("http");
http.createServer(function(req,res){
	res.end("hello word")
}).listen(80,"192.168.3.121",function(){
	console.log("服务器访问完成！")
})