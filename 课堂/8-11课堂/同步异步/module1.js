// function fun(num1,num2){
// 	var result;
// 	setTimeout(function(){
// 		result=num1+num2;
// 	},1000)
// 	return result
// }
// module.exports={
// 	fun:fun
// }
//异步
function fun(num1,num2,callback){
	setTimeout(function(){
		var result=num1+num2;
		callback(result);
	},1000)
	
}
module.exports={
	fun:fun
}