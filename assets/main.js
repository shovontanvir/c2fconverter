
function CtoFarenheit(){
    let c = document.querySelector("#celcius").value;
    console.log(c);
    let f = ((9 * c) / 5) + 32;
    document.querySelector("#farenheit").value = f;
}
  
function FtoCelcius(){
    let f = document.querySelector("#farenheit").value;
    let c = (5 * (f - 32)) / 9;
    document.querySelector("#celcius").value = c;
}