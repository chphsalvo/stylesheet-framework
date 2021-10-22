import Head from "next/head";
import Link from "next/link";

import Header from "../../components/header/header";
import Layout from "../layout/layout";
import CodeBox from "../../components/codeBox/codeBox";

//import styles from '../styles/Home.module.css'

export default function Utilities() {
  return (
    <>
    <Header></Header>

    <Layout>
      <h1>UTILITIES</h1>
      <h2>Square</h2>
      <div className={'flex'}>
          <div className={'col col-3'}>
              <div className={'square'} style={{'backgroundColor'  : ''}}></div>
          </div>
      </div>
      <CodeBox>
      {`
      <div class="square"></div>
      `}
      </CodeBox>
      <CodeBox lang="css">
      {`
      .square{
        width: 100%;
        padding-bottom: 100%;
      }
      `}
      </CodeBox>

    </Layout>
    </>
  );
}
