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