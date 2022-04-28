import Head from "next/head";
import Link from "next/link";

import Header from "../../components/header/header";
import Layout from "../layout/layout";
import CodeBox from "../../components/codeBox/codeBox";

//import styles from '../styles/Home.module.css'

export default function Grid() {
  return (
    <>
    <Header></Header>

    <Layout>
      <h1>FUNCTIONAL CSS</h1>
    </Layout>
    </>
  );
}
