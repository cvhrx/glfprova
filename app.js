import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA49NgSPeAVUg9vfnnCUj4joXXbgsAsKbA",
  authDomain: "fattureglf.firebaseapp.com",
  projectId: "fattureglf",
  storageBucket: "fattureglf.firebasestorage.app",
  messagingSenderId: "556158613585",
  appId: "1:556158613585:web:a88fa2f37a668d9b6c6070"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authView=document.getElementById('authView');
const appView=document.getElementById('appView');
const email=document.getElementById('email');
const password=document.getElementById('password');
const loginBtn=document.getElementById('loginBtn');
const signupBtn=document.getElementById('signupBtn');
const msg=document.getElementById('authMsg');

function showMsg(text,type){ msg.textContent=text; msg.className='msg '+type; msg.style.display='block'; }

loginBtn.onclick=()=>{
  signInWithEmailAndPassword(auth,email.value,password.value)
  .then(()=> showMsg("Login effettuato","success"))
  .catch(e=> showMsg("Errore: "+e.message,"error"));
};
signupBtn.onclick=()=>{
  createUserWithEmailAndPassword(auth,email.value,password.value)
  .then(()=> showMsg("Registrazione avvenuta","success"))
  .catch(e=> showMsg("Errore: "+e.message,"error"));
};

onAuthStateChanged(auth,user=>{
  if(user){ authView.classList.add('hidden'); appView.classList.remove('hidden'); }
  else { appView.classList.add('hidden'); authView.classList.remove('hidden'); }
});

document.getElementById('installBtn').onclick=()=>{
  alert("Per installare: su iPhone usa Condividi → Aggiungi a Home, su Android/Chrome clicca Installa.");
};