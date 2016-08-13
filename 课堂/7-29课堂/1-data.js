var studentslist=(function(){
	var data=[{"name":"红","colol":5,"age":4},
			 {"name":"橙","colol":3,"age":5},
			 {"name":"黄","colol":2,"age":3},
			 {"name":"绿","colol":9,"age":8},
			 {"name":"青","colol":7,"age":2},
			 {"name":"蓝","colol":4,"age":7},
			 {"name":"紫","colol":8,"age":9}];




	return{
		data:data,
		bubbleSort:function(member){
			var len=this.data.length;		
			for(var i=len;i>1;i--){
				for(var j=0;j<i-1;j++){					
					if(this.data[j][member]>this.data[j+1][member]){
						var temp=this.data[j]
						this.data[j]=this.data[j+1]
						this.data[j+1]=temp
					}
				}

			}
		},
		colol:function(){
			this.bubbleSort("colol")
		},
		age:function(){
			this.bubbleSort("age")
		}


	}
})()