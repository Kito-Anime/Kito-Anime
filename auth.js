import { auth } from "./firebase.js";

import {

createUserWithEmailAndPassword,
signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

window.signup = async () => {

try {

await createUserWithEmailAndPassword(
auth,
email.value,
password.value
);

msg.innerText = "Account created";

} catch(e){

msg.innerText = e.message;

}

};

window.login = async () => {

try {

await signInWithEmailAndPassword(
auth,
email.value,
password.value
);

location.href="index.html";

} catch(e){

msg.innerText = e.message;

}

};
