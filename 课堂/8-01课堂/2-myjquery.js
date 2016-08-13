	function $(selector){
			this.dom=document.querySelectorAll(selector);
			console.log(this.dom)
	}
	$.prototype.click=function(fun){
		for(var i=0;i<this.dom.length;i++){
			this.dom[i].addEventListener("click",fun,false)		
		}		
			
	}		