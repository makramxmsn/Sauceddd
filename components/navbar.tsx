import React from 'react';
import styles from '../assets/stylesheets/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <img src="/assets/images/logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.navbarLinks}>
          <a href="/dashboard" className={styles.active}>Dashboard</a>
          <a href="/jobs">Jobs</a>
          <a href="/candidates">Candidates</a>
        </div>
        <div className={styles.userSection}>
          <button className={styles.addButton}>+</button>
          <div className={styles.userProfile}>
            <img src="../assets/images/artwork/Done.png" alt="User Profile" className={styles.profileImage} />
            <span>User_name [Company_name]</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;