import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../assets/stylesheets/navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <img src="/assets/images/logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.navbarLinks}>
          <Link href="/dashboard" className={router.pathname === '/dashboard' ? styles.active : ''}>
            Dashboard
          </Link>
          <Link href="/jobs" className={router.pathname === '/jobs' ? styles.active : ''}>
            Jobs
          </Link>
          <Link href="/candidates" className={router.pathname === '/candidates' ? styles.active : ''}>
            Candidates
          </Link>
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