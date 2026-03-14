import { auth, db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const msg=document.getElementById("msg");

onAuthStateChanged(auth,(user)=>{

if(!user){

location.href="auth.html";

}

});

document.getElementById("uploadBtn").onclick=async()=>{

const title=document.getElementById("title").value;
const thumbnail=document.getElementById("thumbnail").value;
const video=document.getElementById("video").value;

try{

await addDoc(collection(db,"anime"),{

title:title,
thumbnail:thumbnail,
video:video,
createdAt:Date.now()

});

msg.textContent="Upload thành công";

}catch(e){

msg.textContent=e.message;

}

};
