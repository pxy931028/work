var module1=(function(){
	var num1=100;
	var num2=200;
	function add(){
		return num1+num2
	}
	function sub(){
		return num1-num2;
	}
	return{
		add:add,
		sub:sub
	}
})()