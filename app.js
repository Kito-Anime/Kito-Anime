import { auth, db } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const accountBtn=document.getElementById("accountBtn");
const accountMenu=document.getElementById("accountMenu");

const userEmail=document.getElementById("userEmail");
const menuEmail=document.getElementById("menuEmail");

const loginBtn=document.getElementById("loginBtn");
const logoutBtn=document.getElementById("logoutBtn");

const grid=document.getElementById("animeGrid");
const notice=document.getElementById("loginNotice");

let currentUser=null;

/* kiểm tra đăng nhập */

onAuthStateChanged(auth,(user)=>{

if(user){

currentUser=user;

userEmail.textContent=user.email;
menuEmail.textContent=user.email;

loginBtn.style.display="none";
logoutBtn.style.display="block";

notice.style.display="none";

loadAnime();

}else{

currentUser=null;

userEmail.textContent="Tài khoản";
menuEmail.textContent="Chưa đăng nhập";

loginBtn.style.display="block";
logoutBtn.style.display="none";

notice.style.display="block";

}

});

/* menu */

accountBtn.onclick=()=>{

accountMenu.style.display=
accountMenu.style.display==="flex"
?"none"
:"flex";

};

/* click ngoài */

document.addEventListener("click",(e)=>{

if(!accountBtn.contains(e.target)&&!accountMenu.contains(e.target)){

accountMenu.style.display="none";

}

});

/* login */

loginBtn.onclick=()=>{

location.href="auth.html";

};

/* logout */

logoutBtn.onclick=async()=>{

await signOut(auth);

};

/* load anime */

async function loadAnime(){

grid.innerHTML="";

const snap=await getDocs(collection(db,"anime"));

snap.forEach(doc=>{

const data=doc.data();

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${data.thumbnail}">
<h3>${data.title}</h3>
`;

card.onclick=()=>{

if(currentUser){

location.href=`player.html?id=${doc.id}`;

}else{

notice.style.display="block";

}

};

grid.appendChild(card);

});

}

/* login button notice */

window.goLogin=function(){

location.href="auth.html";

};
