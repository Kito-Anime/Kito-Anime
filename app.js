import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");

const userEmail = document.getElementById("userEmail");
const menuEmail = document.getElementById("menuEmail");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

let currentUser = null;

/* kiểm tra đăng nhập */

onAuthStateChanged(auth,(user)=>{

if(user){

currentUser = user;

userEmail.textContent = user.email;
menuEmail.textContent = user.email;

loginBtn.style.display="none";
logoutBtn.style.display="block";

}else{

currentUser = null;

userEmail.textContent="Tài khoản";
menuEmail.textContent="Chưa đăng nhập";

loginBtn.style.display="block";
logoutBtn.style.display="none";

}

});

/* mở menu tài khoản */

accountBtn.onclick=()=>{

accountMenu.style.display =
accountMenu.style.display==="flex"
? "none"
: "flex";

};

/* chuyển sang trang đăng nhập */

loginBtn.onclick=()=>{

location.href="auth.html";

};

/* đăng xuất */

logoutBtn.onclick=async()=>{

await signOut(auth);

accountMenu.style.display="none";

};

/* đóng menu khi click ngoài */

document.addEventListener("click",(e)=>{

if(!accountBtn.contains(e.target) && !accountMenu.contains(e.target)){

accountMenu.style.display="none";

}

});
