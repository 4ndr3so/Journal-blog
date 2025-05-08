import { GoogleAuthProvider } from "firebase/auth";
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
