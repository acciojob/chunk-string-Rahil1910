function stringChop(str, size) {
  // your code here
	let cnt=0,ans="";
	let arr=[];
	if(str==""){
		return arr;
	}
	if(str.length<=size){
		arr.push(str);
		return arr;
	}
	for(let i=0;i<str.length;i++){
		ans+=str[i];
		cnt++;
		if(cnt===size){
			arr.push(ans);
			ans="";
			cnt=0;
		}
	}
	if (ans !== "") {
	    arr.push(ans);
	}
	return arr;
}  

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
