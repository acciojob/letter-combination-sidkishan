var keys = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
function letterCombinations(input_digit) {
  //base case
	if(input_digit.length == 0){
		var base = [];
		base.push("");
		return base;
	}
	var fd = input_digit.charAt(0);
	var rest = input_digit.substring(1);
	var small = letterCombinations(rest);
	var ans = [];
	for(var i = 0; i < keys[fd].length; i++){
		for(var j = 0; j < small.length; j++){
			var str = keys[fd].charAt(i) + small[j];
			ans.push(str);
		}
	}
	return ans;
}

module.exports = letterCombinations;


