import { db } from "./firebase.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const params=new URLSearchParams(location.search);
const id=params.get("id");

const ref=doc(db,"anime",id);
const snap=await getDoc(ref);

const data=snap.data();

document.getElementById("title").textContent=data.title;

const video=document.getElementById("video");

if(Hls.isSupported()){

const hls=new Hls();

hls.loadSource(data.video);
hls.attachMedia(video);

}
else{

video.src=data.video;

}
