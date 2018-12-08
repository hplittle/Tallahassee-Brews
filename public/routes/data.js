//var mainText = document.getelementById("mainText");
//var submitBtn = document.getelementById("submitBtn");


function clickStar(){
const firebaseRef = firebase.database().ref().child("Text").set("beer one");
window.alert("hooray");
}

document.getElementById('clickBtn').addEventListener('click', clickStar);
