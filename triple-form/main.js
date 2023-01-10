// function myFunction(str) {

//     var login = document.getElementById('login')
//     var register = document.getElementById('register')
//     var foget_password = document.getElementById('fogot_password')
//       if(str==1){
   
//         login.classList.toggle("mystyle");
//         register.classList.remove("mystyle");
//         foget_password.classList.remove("mystyle");
//        }else if(str==0){
//         register.classList.toggle("mystyle");
//         login.classList.remove("mystyle");
//         foget_password.classList.remove("mystyle");
        
//        }else{
//         register.classList.remove("mystyle");
//         login.classList.remove("mystyle");
//         foget_password.classList.toggle("mystyle");
//        }
       
//    }

  var login = document.getElementById('login')
  var register = document.getElementById('register')
  var foget_password = document.getElementById('foget_password')

  var loginForm = document.getElementById('login_id')
  var registerForm = document.getElementById('register_id')
  var fogetPasswordForm = document.getElementById('foget_password_id')

  login.onclick = function() {
    login.classList.add("mystyle");
    register.classList.remove("mystyle");
    foget_password.classList.remove("mystyle");

    loginForm.style.display = "block";
    registerForm.style.display = "none";
    fogetPasswordForm.style.display = "none";
  }

  register.onclick = function() {
    register.classList.add("mystyle");
    login.classList.remove("mystyle");
    foget_password.classList.remove("mystyle");

    loginForm.style.display = "none";
    registerForm.style.display = "block";
    fogetPasswordForm.style.display = "none";
  }

  foget_password.onclick = function() {
    register.classList.remove("mystyle");
    login.classList.remove("mystyle");
    foget_password.classList.add("mystyle");

    loginForm.style.display = "none";
    registerForm.style.display = "none";
    fogetPasswordForm.style.display = "block";
  }