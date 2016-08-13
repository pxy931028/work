          var cat={
         	name:"mimi",
         	age:2,
         	sayName:function(){
         		alert(this.name);
                return this
         	},
            jianjie:function(){
            	var content="大家好！我是"+ this.name +",我今年"+ this.age +"岁了。";
                alert(content);
                return this
            },
            eat:function(foot){
            	var content ="我喜欢吃"+foot+"。"
            	alert(content)
                return this
            },
            count:function(num1,num2,sign){
               var result =""
                switch(sign){
				    case "+": result=Number(num1)+Number(num2);break;
				    case "-": result=Number(num1)-Number(num2);break;
				    case "*": result=Number(num1)*Number(num2);break;
				    case "/": result=Number(num1)/Number(num2);break;
			    }
			   var content = num1 + sign + num2 + "计算的结果是：" + result ;
			   alert(content);
               return this
            }
         }
       // <!--   cat.sayName();
       //   cat.name = "miaomiao";
       //   cat.jianjie();
       //   cat.eat("fish");
       //   cat.count("1","2","+"); -->
