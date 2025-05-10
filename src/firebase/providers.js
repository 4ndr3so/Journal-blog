import { createUserWithEmailAndPassword, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { signInWithPopup } from "firebase/auth";

const googleProvider= new GoogleAuthProvider();

export const singInWithGoogle = async(  ) => {
    try {
        const result = await signInWithPopup( FirebaseAuth,googleProvider );
        //const credential = GoogleAuthProvider.credentialFromResult( result );
       
       const { displayName, email, photoURL, uid } = result.user;

       return {
            ok: true,
            displayName, email, photoURL, uid,
            //credential
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
         const email = error.customData.email;
         const credential = GoogleAuthProvider.credentialFromError( error );
       
         return { ok: false, errorMessage};
    }


}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error.message);
        return { ok: false, errorMessage: error.message }
    }

}

