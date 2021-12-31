/*p = principal
 * i = interest
 * y = client input for years
 * target = completion year
 * plus = principal plus interest
 * r = interest input
 * rv = interest after click*/
var p = 0;
var r = 0;
var plus = 0;
var y = 0;
function compute() {
    var plus = (p+i);
    document.getElementById('plus').innerHTML = plus;
    var p = parseInt(document.getElementById('p').value = p);
    var r = document.getElementById('r').value;
    var y = document.getElementById('y').value;
    var target = (new Date().getFullYear() + parseInt(y));
    document.getElementById('target').innerHTML = target;

    /*Simple Interest Formula =
  principal*interest rate*years/100*/
    var i = (p*y*r)/100;
    document.getElementById('i').innerHTML = i;
}
function uR() {
    /*interest change*/
    var rv = document.getElementById('r').value;
    document.getElementById('rv').innerText = rv;
}


