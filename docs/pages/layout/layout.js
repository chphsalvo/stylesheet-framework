import Head from "next/head";
import Link from "next/link";

import styles from './layout.module.scss'

import Sidebar from "../../components/sidebar/sidebar";

export default function Layout({children}) {

  return (
    <>
    <main className="headerFixed">

      <Sidebar></Sidebar>

        <div className={'content paddingPage'}>
            {children}
        </div>
        
    </main>
    </>
  );
}
