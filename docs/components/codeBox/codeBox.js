import Head from "next/head";
import Link from "next/link";

import styles from './codeBox.module.scss'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from '../../../node_modules/react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBox({children}) {

    const codeString = `
    <div class="example">
        example
    </div>
    `;

    // debug
    // console.log(children);

  return (
    <>
        <section className={styles.codeBox + ' marginSection'}>
        <SyntaxHighlighter
            language="xml"
            style={stackoverflowLight}
            showLineNumbers="true"
        >
            {children}
        </SyntaxHighlighter>
        </section>
    </>
  );
}
