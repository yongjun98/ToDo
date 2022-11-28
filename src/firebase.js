import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCujx70yw4RdiyT0qByjrqkmFfdUIhZ7Fo",
    authDomain: "webframe-9fe81.firebaseapp.com",
    projectId: "webframe-9fe81",
    storageBucket: "webframe-9fe81.appspot.com",
    messagingSenderId: "119860668323",
    appId: "1:119860668323:web:09d380258e3057fd645c16",
    measurementId: "G-17DHYL0PL0",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

//Email 회원가입
export const signUpEmail = async (username, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log("회원가입 성공");
    const { stsTokenManager, uid } = user;
    console.log(uid);
    const docRef = await addDoc(collection(firestore, "User"), {
      name : username,
      email : email
    });  
    console.log(docRef.id);
    alert("회원가입 성공했습니다.");
    window.location.href='/login';
  } catch (error) {
    
  }
};

  
  //Email 로그인
export const signInEmail = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { stsTokenManager, uid } = user;
    //setAuthInfo({ uid, email, authToken: stsTokenManager });
    //navigate('/');
  } catch (error) {
      
    }
};

  export { firestore };
  export { auth };