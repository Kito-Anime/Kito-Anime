// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP9ZnwzQrrRY5JNy1DANm3boaWgvhoS_w",
  authDomain: "kito-anime-vn.firebaseapp.com",
  projectId: "kito-anime-vn",
  storageBucket: "kito-anime-vn.firebasestorage.app",
  messagingSenderId: "287480619398",
  appId: "1:287480619398:web:f40d137345407f27874c07",
  measurementId: "G-N29YRE1NQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// DOM
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const authForm = document.getElementById("authForm");
const submitBtn = document.getElementById("submitBtn");
const logoutBtn = document.getElementById("logoutBtn");
const message = document.getElementById("message");

let isLogin = true;

// Chuyển tab
loginTab.onclick = () => {
  isLogin = true;
  submitBtn.textContent = "Đăng nhập";
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  message.textContent = "";
};

registerTab.onclick = () => {
  isLogin = false;
  submitBtn.textContent = "Đăng ký";
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  message.textContent = "";
};

// Submit form
authForm.onsubmit = async (e) => {
  e.preventDefault();
  const email = email.value.trim();
  const password = password.value.trim();

  if (password.length < 6) {
    message.textContent = "Mật khẩu tối thiểu 6 ký tự";
    return;
  }

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
      message.textContent = "Đăng nhập thành công";
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      message.textContent = "Đăng ký thành công";
    }
  } catch (error) {
    message.textContent = error.message;
  }
};

// Logout
logoutBtn.onclick = async () => {
  await signOut(auth);
};

// Theo dõi trạng thái đăng nhập
onAuthStateChanged(auth, (user) => {
  if (user) {
    logoutBtn.classList.remove("hidden");
    authForm.classList.add("hidden");
    message.textContent = "Đã đăng nhập: " + user.email;
  } else {
    logoutBtn.classList.add("hidden");
    authForm.classList.remove("hidden");
  }
});
