firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location = 'theapp';
    }
});

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
