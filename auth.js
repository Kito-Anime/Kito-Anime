import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const msg = document.getElementById("msg");

loginTab.onclick = () => {

loginTab.classList.add("active");
signupTab.classList.remove("active");

loginForm.classList.add("active");
signupForm.classList.remove("active");

msg.textContent="";

};

signupTab.onclick = () => {

signupTab.classList.add("active");
loginTab.classList.remove("active");

signupForm.classList.add("active");
loginForm.classList.remove("active");

msg.textContent="";

};

/* LOGIN */

document.getElementById("loginBtn").onclick = async () => {

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

try{

await signInWithEmailAndPassword(auth,email,password);

location.href="index.html";

}catch(e){

msg.textContent = e.message;

}

};

/* SIGNUP */

document.getElementById("signupBtn").onclick = async () => {

const email = document.getElementById("signupEmail").value;
const password = document.getElementById("signupPassword").value;

try{

const cred = await createUserWithEmailAndPassword(auth,email,password);

await setDoc(doc(db,"users",cred.user.uid),{
email:cred.user.email,
createdAt:Date.now(),
role:"user"
});

msg.textContent="Tạo tài khoản thành công";

}catch(e){

msg.textContent = e.message;

}

};
