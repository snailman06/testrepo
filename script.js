/*p = principal
 * i = interest
 * years = client input for years
 * target = completion year
 * plus = principal plus interest
 * rate = interest input*/
function compute() {
var plus = (p+i);
    document.getElementById('plus').innerHTML = plus;
var p = parseInt(document.getElementById('p').value);
var rate = document.getElementById('rate').value;
var years = document.getElementById("years").value;
var target = (new Date().getFullYear() + parseInt(years));
    document.getElementById('target').innerHTML = target;

    /*Simple Interest Formula =
  p*rate*years/100*/
var i = (p*years*rate)/100;
    document.getElementById('i').innerHTML = i;
    
  
}
function updateRate()  {/*interest change*/
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

        
