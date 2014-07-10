var letterCounter = function(word) {
	  var lCount = {}
	  word = word.toLowerCase()
	 for (i = 0; i < word.length; i++) {
	 	var kek = word[i];
	 	var cCount = lCount[kek];
	 	if (cCount === undefined) {
	 			lCount[kek] = 1; 
	 	}
	 	else {
	 		lCount[kek]++; 
	 	}
	 	
	 }
	 for (k in lCount) {
	 	console.log(k,"-",lCount[k]);
	 }
}
letterCounter("aPple")









