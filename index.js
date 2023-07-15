const PI = 3.14999;


//C = 2 * r * PI;

document.getElementById('submit').onclick = function(){
 let condition = document.getElementById('radius');
  if (condition.value == "" || condition.value == null) {
    document.getElementById('answer').innerText = "Please Enter a Radius";
  }else{
  let  radius = document.getElementById('radius').value;
    radius = Number(radius);

  let  c = 2 * radius * PI;

    document.getElementById('answer').innerHTML = "c = "+ c;

}



}

document.getElementById('reset').onclick = function () {
  document.getElementById('radius').value = "";
  document.getElementById('answer').innerText = "";
}




