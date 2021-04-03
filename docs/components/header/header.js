import Head from "next/head";
import Link from "next/link";

import styles from './header.module.scss'

import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-uim/github';

export default function Header() {
  return (
    <>
    <header id={styles.header} className={'paddingPage'}>
        <div className={'flex middle center'} style={{'height': '100%'}}>
            <div className={'col col-2'}>
                <div className={styles.logo}>
                    <Link href="/">Stylesheet Framework</Link>
                    <span className={styles.tag}>v. 0.9.3</span>
                </div>
            </div>
            <div className={'col col-6'}>
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
            </div>
            <div className={'col col-4'}>
                <div className={'flex right'}>
                    <a href="https://github.com/chphsalvo/stylesheet-framework" target="_blank">
                        <Icon icon={githubIcon} width={32} color={'blue'} />
                    </a>
                </div>
            </div>
        </div>
    </header>
    </>
  );
}
