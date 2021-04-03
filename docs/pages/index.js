import Head from "next/head";
import Link from "next/link";

import Header from "../components/header/header";
import Layout from "../pages/layout/layout";

//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Layout></Layout>
    </>
  );
}
