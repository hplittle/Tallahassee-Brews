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

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    //window.alert("Error : " + errorMessage);

    window.location='/';
  });
window.location='master';
}







firebase.auth().onAuthStateChanged(firebase =>{
  if(firebaseUser){
    window.alert(firebaseUser);
  } else {
    window.alert("not Logged in");
  }
});
