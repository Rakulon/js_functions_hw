g = [7,3,2]
var sillysum = function(g) {
var sum = 0
for( i = 0; i < g.length ; i++) {
	sum += g[i]*i  
}
return sum
}
console.log(sillysum(g))