        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBzug59DBEO9BsTDeX6JHgv_Ox-ueQK0Nk",
          authDomain: "login-651df.firebaseapp.com",
          projectId: "login-651df",
          storageBucket: "login-651df.appspot.com",
          messagingSenderId: "224523719153",
          appId: "1:224523719153:web:239cc94be8511d702d7450"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app)