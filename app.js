import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const userEmail = document.getElementById("userEmail");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

/* kiểm tra đăng nhập */

onAuthStateChanged(auth,(user)=>{

if(user){

userEmail.textContent = user.email;

loginBtn.style.display="none";
logoutBtn.style.display="block";

}else{

userEmail.textContent="";

loginBtn.style.display="block";
logoutBtn.style.display="none";

}

});

/* login */

loginBtn.onclick = ()=>{

location.href="auth.html";

};

/* logout */

logoutBtn.onclick = async ()=>{

await signOut(auth);

};

/* demo anime */

const animeData=[

{
title:"Attack on Titan",
image:"https://cdn.myanimelist.net/images/anime/10/47347.jpg"
},

{
title:"Demon Slayer",
image:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
}

];

const grid=document.getElementById("animeGrid");

animeData.forEach(a=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${a.image}">
<h3>${a.title}</h3>
`;

grid.appendChild(card);

});
