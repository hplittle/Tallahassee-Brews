firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("logout-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
    window.alert("Welcome User : " + email_id);

    }

  } else {
    // No user is signed in.

    document.getElementById("logout-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("emailInput").value;
  var userPass = document.getElementById("passwordInput").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
window.location='master';
}

function logout(){
  firebase.auth().signOut();
}
