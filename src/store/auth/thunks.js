import { singInWithGoogle } from "../../firebase/providers";
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
