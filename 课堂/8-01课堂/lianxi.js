	function $(selector){
			return $.prototype.init(selector);
		}
		$.prototype={
			init:function(selector){
				this.dom=document.querySelectorAll(selector);
				return this;
			},
			click:function(fun){
				this.each(function(data){
					data.addEventListener("click",fun,false);
				})
			},
			each:function(fun){
				for(var i=0;i<this.dom.length;i++){
					fun(this.dom[i]);
				}
			},
			attr:function(){
				if(arguments.length==1){
					return this.dom[0][arguments[0]]
				}else if(arguments.length==2){
					var attrname=arguments[0];
					var val=arguments[1];
					this.each(function(data){
					data[attrname]=val;
					})
				}
			}
		}