$(document).ready(function() {
// Problem 1 - sum of all multiples of 3 and 5, under 1000
var sum = 0;
for (var i = 0; i <= 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum = sum + i;
	}
}
$('.sol1').text("The answer is: " + sum);
});