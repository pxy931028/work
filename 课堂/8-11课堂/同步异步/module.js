//同步
// function fun(num1,num2){
//   return num1+num2
// }

// module.exports={
// 	fun:fun
// }
//异步
function fun0(num1,num2,callback){
	var result =num1+num2;
	callback(result);	
}
module.exports={
		fun0:fun0
	}