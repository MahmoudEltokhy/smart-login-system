var userNameInput = document.getElementById("name");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var signUpBtn = document.getElementById("signUpBtn"); 
var users = [] ; 


if(localStorage.getItem("users") != null){

    users = JSON.parse(localStorage.getItem("users"))
}


function addUser(){


if(validationName() && validationEmail()){

var user ={

        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value,
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users)); 
    window.location = "./index.html"

}

else{

    alert("Enter Valid Data")
}

}



signUpBtn.addEventListener("click" , function(e){

    addUser();
    emptyinputs();

})

   

function emptyinputs(){

    userNameInput.value = ''; 
    userEmailInput.value = '';
    userPasswordInput.value = '';

}



function validationName(){

    var messageName = document.getElementById("messageName");

    var regex = /^[A-Z][a-z]{2,15}\s?(([A-Z][a-z])[a-z]{2,8})?$/;


    if(regex.test(userNameInput.value)){

        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        messageName.classList.add("d-none");

        return true;  
    }

    else{

        userNameInput.classList.remove("is-valid");
        userNameInput.classList.add("is-invalid");
        messageName.classList.remove("d-none");
        return false; 
    }
}

userNameInput.addEventListener("input" , function(e){
    validationName();
})

function validationEmail(){

    var regex = /\S+@\S+\.\S+/; 
    var messageEmail = document.getElementById("messageEmail");
    var messageEmail1 = document.getElementById("messageEmail1");

    if(regex.test(userEmailInput.value)){

        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        messageEmail.classList.add("d-none");
        for(var i = 0 ; i < users.length ; i++){

        if(users[i].email == userEmailInput.value){
           messageEmail1.classList.toggle("d-none");
           return false;
            }
            else{

                return true
            }
        }

        return true;
    }

    else{

        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        messageEmail.classList.remove("d-none");
        return false;
    }
}

userEmailInput.addEventListener("input" , function(e){
    validationEmail();
})

