
userEmailInput = document.getElementById("userEmail");
userPasswordInput = document.getElementById("userPassword");
var loginBtn = document.getElementById("loginBtn");
var index = [];



var users = [];

if(localStorage.getItem("users") != null){

    users = JSON.parse(localStorage.getItem("users"))
}

function loginUser(){

    var alert1 = document.getElementById("alert1");

    var alert2 = document.getElementById("alert2");

    for(var i = 0 ; i < users.length ; i++){


        if(userEmailInput.value == '' || userPasswordInput.value == ''){

            alert2.classList.remove("d-none");

        }
        if(userEmailInput.value != users[i].email || userPasswordInput.value != users[i].password){

            alert1.classList.remove("d-none");

        }

        if(userEmailInput.value == users[i].email && userPasswordInput.value == users[i].password){
window.location = "./userpage.html";
var name = users[i].name;
sessionStorage.setItem("user" , name);
        }

   
        
    }


}


loginBtn.addEventListener("click" , function(e){

    loginUser();
  

})
