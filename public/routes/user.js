/* // create and authenticate user functions

//CREATE
function createUser(event) {

    event.preventDefault();

    const form = event.target;
    const email = form.username.value;
    const password = form.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (response) {
            alert("user created");
        })
        .catch(function (error) {
            alert(error);
        });

    const url = new URL('http://localhost:3000/createUser');
    let params = {username: username, password: password};
}

document.querySelector('#createuser').addEventListener('submit', createUser);

//Sign Up
function formSubmit(event) {

  //my function level variables
    const myform = event.target;
    let error = false;

    if (!myform.firstname.value || !(myform.firstname.value[0] === myform.firstname.value[0].toUpperCase()) ){
            alert("Please enter your name and have the first letter be captialized.");
            error = true;
        }
    if (!myform.lastname.value || !(myform.lastname.value[0] === myform.lastname.value[0].toUpperCase()) ){
                alert("Please enter your name and have the first letter be captialized.");
                error = true;
            }
    if (!myform.email.value) {
                alert("Please enter your name and have the first letter be captialized.");
                error = true;
            }

      if (!myform.username.value || myform.username.value.length < 5) {
          alert("Please enter a username with five characters or more.");
            error = true;
        }

      if (!myform.password.value || myform.password.value.length < 6) {
            alert("Please enter a password with six characters or more.");
            error = true;
        }
// put event default in both returns to allow the user to adjust the neccessary data
    if (error) {
            event.preventDefault();
            return false;
        }
        //prints all the correct data from the previos enteries into the output div
  }
document.querySelector('#createuser').addEventListener('submit', formSubmit);


//LOGIN
function loginUser(event) {

    event.preventDefault();

    const form = event.target;
    const email = form.username.value;
    const password = form.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            alert('Invalid username/password');
        });
}

document.querySelector('#login-form').addEventListener('submit', loginUser);
*/
const config = {
apiKey: "AIzaSyAcIMW1HXU3OC9-ZfC06Dc5fu7b7pjXL1Q",
 authDomain: "tallahassee-brews.firebaseapp.com",
 databaseURL: "https://tallahassee-brews.firebaseio.com",
 projectId: "tallahassee-brews",
 storageBucket: "tallahassee-brews.appspot.com",
 messagingSenderId: "144546056897"
};
firebase.initializeApp(config);

function alertEvent(event) {

    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (response) {
            //alert("user Created");
        })
        .catch(function (error) {
            alert(error);
        });

    const url = new URL('http://localhost:3000/proof');
    let params = {email: email, password: password};
}

document.querySelector('#create-form').addEventListener('submit', alertEvent);
