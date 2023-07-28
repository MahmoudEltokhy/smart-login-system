
var nameOfUser = document.getElementById("nameOFUser");
var logOutBtn = document.getElementById("logOutBtn");



var index = sessionStorage.getItem("user");
console.log(index);



nameOfUser.innerHTML = index;

logOutBtn.addEventListener("click" , function(e){


    window.location = "./index.html";




})