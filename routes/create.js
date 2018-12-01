function createUser(event) {

    event.preventDefault();

    const form = event.target;
    const email = form.username.value;
    const password = form.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (response) {
            const output = document.querySelector("#output");
            output.innerHTML = 'User has been created';
        })
        .catch(function (error) {
            alert(error);
        });

    const url = new URL('http://localhost:8081/createUser');
    let params = {username: username, password: password};
}

document.querySelector('#create-form').addEventListener('submit', createUser);
