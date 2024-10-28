import{onAuthStateChangead} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./js/firebase.js"
import{loginCheck} from ".js/loginCheck.js"

import './js/signupForm.js'
import "./js/googleLogin.js"

onAuthStateChangead(auth, async(user)=>{
    loginCheck(user)
})


