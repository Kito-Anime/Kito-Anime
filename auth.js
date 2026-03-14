import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const tabLogin = document.getElementById("tabLogin");
const tabSignup = document.getElementById("tabSignup");

const toSignup = document.getElementById("toSignup");
const toLogin = document.getElementById("toLogin");

const msg = document.getElementById("msg");

function showLogin(){

loginForm.classList.add("active");
signupForm.classList.remove("active");

tabLogin.classList.add("active");
tabSignup.classList.remove("active");

}

function showSignup(){

signupForm.classList.add("active");
loginForm.classList.remove("active");

tabSignup.classList.add("active");
tabLogin.classList.remove("active");

}

tabLogin.onclick = showLogin;
tabSignup.onclick = showSignup;

toSignup.onclick = showSignup;
toLogin.onclick = showLogin;

document.getElementById("loginBtn").onclick = async ()=>{

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

try{

await signInWithEmailAndPassword(auth,email,password);

location.href="index.html";

}catch(e){

msg.innerText = e.message;

}

};

document.getElementById("signupBtn").onclick = async ()=>{

const email = document.getElementById("signupEmail").value;
const password = document.getElementById("signupPassword").value;

try{

const cred = await createUserWithEmailAndPassword(auth,email,password);

await setDoc(doc(db,"users",cred.user.uid),{
email:cred.user.email,
createdAt:Date.now(),
role:"user"
});

msg.innerText="Đăng kí thành công";

showLogin();

}catch(e){

msg.innerText = e.message;

}

};
