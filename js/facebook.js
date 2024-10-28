import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from './message.js'
const googleButton = document.querySelector('#loginFacbook')

googleButton.addEventListener('click', async()=>{

    const provider = new GoogleAuthProvider()

    try{
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

        const modal = bootstrap.modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showMessage('welcome' + credentials.user.displayName, 'success')

    }catch(error){
        console.log(error)
    }

})