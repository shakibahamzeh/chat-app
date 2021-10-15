import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logo}>ChatGram</div>
            <div className={styles.button} onClick={logoutHandler}>Logout</div>
        </div>
    )
}


export default Navbar;