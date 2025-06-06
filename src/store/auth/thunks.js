import { loginInWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {

    return async ( dispatch ) => {

        //dispatch( { type: 'checkingCredentials' } );
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
       dispatch( checkingCredentials() );

       const result = await singInWithGoogle();
       if( !result.ok ) return dispatch( logout( result.errorMessage ) );

       dispatch( login( result ) );
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({ email, password, displayName });
        //console.log({result});
        if ( !ok ) return dispatch( logout( {errorMessage} ) );

        dispatch( login( {uid,displayName,email,photoURL} ))

    }

}
export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

         const result = await loginInWithEmailPassword({ email, password });

         
         console.log({result});
         if ( !result.ok ) return dispatch( logout( result) );

        // dispatch( login( result ) )

    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        //Firebase logout
        //dispatch( checkingCredentials() );
        await logoutFirebase();

        dispatch( logout({}) );
    }
}
