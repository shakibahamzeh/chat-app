import React from 'react';
import firebase from '@firebase/app-compat';
import { auth } from '../firebase';
import google from "../assets/google.svg";
import styles from "./Login.module.css";

 const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome To ChatGram!</h2>
                <div 
                onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                className={styles.button}>
                    <img src={google} alt="google"/>Sign in with Google
                </div>
            </div>
        </div>
    )
}
export default Login;