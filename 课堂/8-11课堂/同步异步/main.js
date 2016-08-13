// var module1=require("./module")
// console.log(module1.fun(1,100))

//异步
// var module2=require("./module");
// module2.fun0(12,16,function(result){
// 	console.log(result)
// })
//比较
var module3=require("./module1");
// console.log(module3.fun(12,16))
module3.fun(12,16,function(result){
	console.log(result)
})


console.log("/////////////////////////////////////////////////")
console.log("1")