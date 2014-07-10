var arr1 = [3,6,11,12,23,34,46,76], arr2 = [2,4,5,8,9], arr3 = [];
var maxleng = arr1.length + arr2.length

var merge = function(arr1, arr2){
	for (var i = 0; i < maxleng; i++) {
		
		if (arr1.length === 0) {
			arr3.push(arr2.shift());
		}
		else if (arr2.length === 0) {
			arr3.push(arr1.shift());
		}
		else {
			if (arr1[0] < arr2[0]) {
				arr3.push(arr1[0]);
				arr1.shift(); 
			}
			else {
				arr3.push(arr2[0]);
				arr2.shift(); 
			}
		}


	}
	return arr3;

}


console.log(merge(arr1, arr2));
