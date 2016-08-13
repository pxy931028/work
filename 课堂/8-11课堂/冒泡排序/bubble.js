function sort(arr,next){
	var len = arr.length
	for(var i = len;i>=2;i--){
		for(var j = 0;j<i-1;j++){
			if(arr[j] > arr[j + 1]){
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j+1] = temp;
			}
		}
	}
	next(arr);
}

module.exports = {
	bubble:sort
}