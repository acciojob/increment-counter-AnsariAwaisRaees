//your JS code here. If required.
let para = document.getElementById('counter');
let btn = document.getElementById('increment');

btn.addEventListener('click', function(){
	var currValue = parseInt(para.innerText);
	para.innerText = currValue + 1;

	alert(currValue);
});