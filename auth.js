import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let mode = "login";

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");

const switchLabel = document.getElementById("switchLabel");
const switchLink = document.getElementById("switchLink");

const btnLogin = document.getElementById("btnLogin");
const btnSignup = document.getElementById("btnSignup");

btnLogin.onclick = () => setMode("login");
btnSignup.onclick = () => setMode("signup");
switchLink.onclick = () => setMode(mode === "login" ? "signup" : "login");

function setMode(m){

mode = m;

msg.innerText = "";

if(mode === "login"){

formTitle.innerText = "Đăng nhập";
submitBtn.innerText = "Đăng nhập";

switchLabel.innerText = "Chưa có tài khoản?";
switchLink.innerText = "Đăng kí";

}else{

formTitle.innerText = "Đăng kí";
submitBtn.innerText = "Đăng kí";

switchLabel.innerText = "Đã có tài khoản?";
switchLink.innerText = "Đăng nhập";

}

}

submitBtn.onclick = async () => {

msg.innerText = "";

try{

if(mode === "login"){

await signInWithEmailAndPassword(
auth,
email.value,
password.value
);

location.href="index.html";

}else{

const cred = await createUserWithEmailAndPassword(
auth,
email.value,
password.value
);

await setDoc(doc(db,"users",cred.user.uid),{
email:cred.user.email,
createdAt:Date.now(),
role:"user"
});

msg.innerText = "Tạo tài khoản thành công";

setMode("login");

}

}catch(e){

msg.innerText = e.message;

}

};
