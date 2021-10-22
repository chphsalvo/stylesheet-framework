import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

import styles from './sidebar.module.scss'

// import { Icon, InlineIcon } from '@iconify/react';
// import githubIcon from '@iconify/icons-uim/github';

export default function Sidebar() {

    const [showSidebar, setShowSidebar] = useState(0);

    const router = useRouter();

    function toggleSidebar(){
        if(showSidebar == 0){
            console.log('showSidebar = 0');
            setShowSidebar(1);
            console.log(showSidebar);
        }
        if(showSidebar == 1){
            console.log('showSidebar = 1');
            setShowSidebar(0);
            console.log(showSidebar);
        }
    }

  return (
    <>
    <div className={showSidebar == 1 ? styles.sidebar + ' ' + styles.open : styles.sidebar}>
        <div className={showSidebar == 1 ? styles.sidebarContent + ' ' + styles.open : styles.sidebarContent}>
            <nav className={styles.menu}>
                <ul>
                    <li className={router.pathname == "/" ? styles.active : ""}>
                        <Link href="/">Index</Link>
                    </li>
                    <li className={router.pathname == "/grid" ? styles.active : ""}>
                        <Link href="/" className={styles.hasChildren}>Grid</Link>
                        <ul className={styles.submenu}>
                            <li className={router.pathname == "/grid" ? styles.active : ""}>
                                <Link href="/grid">Grid Row</Link>
                            </li>
                            <li className={router.pathname == "/grid-flex" ? styles.active : ""}>
                                <Link href="/grid-flex">Grid Flex</Link>
                            </li>
                        </ul>
                    </li>  
                    <li className={router.pathname == "/components" ? styles.active : ""}>
                        <Link href="/" className={styles.hasChildren}>Components</Link>
                        <ul className={styles.submenu}>
                            <li className={router.pathname == "/components/background" ? styles.active : ""}>
                                <Link href="/components/background">background</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={router.pathname == "/utilities" ? styles.active : ""}>
                        <Link href="/" className={styles.hasChildren}>Utilities</Link>
                        <ul className={styles.submenu}>
                            <li className={router.pathname == "/utilities/utilities" ? styles.active : ""}>
                                <Link href="/utilities/utilities">utilities</Link>
                            </li>
                            <li className={router.pathname == "/utilities/functionalcss" ? styles.active : ""}>
                                <Link href="/utilities/functionalcss">functional CSS</Link>
                            </li>
                        </ul>
                    </li>                
                </ul>
            </nav>
        </div>
    </div>
    <div className={styles.sidebarHamburger} onClick={() => toggleSidebar()}>
        <div className={styles.hamburger + ' square hamburger'}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    </>
  );
}
