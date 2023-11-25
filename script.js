//your JS code here. If required.
let p = document.getElementById('counter');
let butt = document.getElementById('incrementBtn');

let count = 0;

butt.addEventListener('click', increse)
function increse(){
    alert (count);
    count++;
    p.innerHTML = count;
}