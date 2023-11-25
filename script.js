//your JS code here. If required.
var counterElement = document.getElementById('counter');
var incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', function () {
	var currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue + 1;
			
    alert(currentValue);
});