import Head from "next/head";
import Link from "next/link";

import styles from './layout.module.scss'

export default function Layout({children}) {

  return (
    <>
    <main className="headerFixed">

        <div className={'sidebar paddingPage'}>
            menu
        </div>

        <div className={'content paddingPage'}>
            {children}
        </div>
        
    </main>
    </>
  );
}
