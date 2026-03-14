import { auth, db } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const userEmail=document.getElementById("userEmail");
const loginBtn=document.getElementById("loginBtn");
const logoutBtn=document.getElementById("logoutBtn");

onAuthStateChanged(auth,(user)=>{

if(user){

userEmail.textContent=user.email;
loginBtn.style.display="none";
logoutBtn.style.display="block";

}else{

userEmail.textContent="";
loginBtn.style.display="block";
logoutBtn.style.display="none";

}

});

loginBtn.onclick=()=>{
location.href="auth.html";
};

logoutBtn.onclick=async()=>{
await signOut(auth);
};

const grid=document.getElementById("animeGrid");

async function loadAnime(){

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
location.href=`player.html?id=${doc.id}`;
};

grid.appendChild(card);

});

}

loadAnime();
