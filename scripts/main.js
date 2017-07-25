$(document).ready(function() {
// Problem 1 - sum of all multiples of 3 and 5, under 1000
var sum = 0;
for (var i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum = sum + i;
	}
}
$('.sol1').text("The answer is: " + sum);
	
// Problem 2 - sum all Fibonacci terms less than four million.
	
 var sol2 = 0;
 var a = 0;
 var b = 1;
 var c = 1;
 while (c <= 4000000) {

 	a = b;
 	b = c;
 	c = a + b;
 	if (c % 2 === 0) {
 		sol2 = sol2 + c;
 	}

 }
$('.sol2').text("The answer is: " + sol2);
});