import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
import { auth } from "./firebase.js"
const signupForm = document.querySelector('#login-section')
signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const usuario = signupForm['login-usuario'].value
    const contraseña = signupForm['login-contraseña'].value

    console.log(usuario, contraseña)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, usuario, contraseña)
        console.log(userCredentials)
    }catch (error){
        console.log(error)
    }
})