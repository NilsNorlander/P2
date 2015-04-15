function isArmstrong(n){
	"use strict"; var sum = 0;
	n = String(n);
	//traverse n
	for(var i = 0; i<n.length; ++i){
		sum = sum+Math.pow(Number(n[i]), n.length);
	};
	if(n==sum){
		return true
	}
		
	return false
};

function allArmstrongs(){
	var result = "";
	//generate
	for (var k=1; k<=99999; ++k){
		//test
		if (isArmstrong(k)){
			result += String(k) + ' ';

		}
	}
	return result
};

function allSubstrings1(str){
	result=''; word='';
	for(var k=0; k<str.length; ++k){
	for (var i=k;  i<str.length; ++i) {
		word += str[i];
		result += word + ',';
	}
	word = '';
}
	return result;
};

function allSubstrings2(str){
	result=[]; word='';
	for(var k=0; k<str.length; ++k){
	for (var i=k;  i<str.length; ++i) {
		word += str[i];
		result.push(word)
	}
	word = '';
}
	return result;
};

function maxWord(str){
	str = str.split(" ");
	result = '';
	for(i=0; i<str.length; ++i){
		if(str[i].length > result.length){
			result = str[i];
		};
	};
	return result
};

