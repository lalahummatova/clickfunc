
var mybaki = document.querySelectorAll(".myul li")

var myspan = document.querySelector(".myspan")
for (var i = 0; i < mybaki.length; i++) {

  mybaki[i].addEventListener("click", function () {
    

if (this.style.color!== "red"){
  this.style.color = "red"
  this.style.backgroundColor = "yellow"
  myspan.innerText = Number(myspan.innerText)+1
}

  })




}












