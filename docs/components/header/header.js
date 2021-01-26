import Head from "next/head";
import Link from "next/link";

import styles from './header.module.scss'

export default function Header() {
  return (
    <header>
        <ul className={styles.menuMain + ' flex'}>
            <li>
                <Link href="/">Index</Link>
            </li>
            <li>
                <Link href="/grid/">Grid</Link>
            </li>
            <li>
                <Link href="/grid-flex/">Grid Flex</Link>
            </li>
        </ul>
    </header>
  );
}
