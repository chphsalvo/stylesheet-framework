import Head from "next/head";
import Link from "next/link";

import Header from "../../components/header/header";
import Layout from "../../pages/layout/layout";
import CodeBox from "../../components/codeBox/codeBox";

//import styles from '../styles/Home.module.css'

export default function Grid() {
  return (
    <>
    <Header></Header>

    <Layout>
      <h1>BACKGROUND</h1>
      <h2>bg image</h2>
      <div className="flex middle">
        <div className="col col-x2">
          <div className="square bg-img" style={{backgroundImage: 'url(https://picsum.photos/id/257/1920/1080)'}}></div>
        </div>
        <div className="col col-x2">
          <div className="ratio--16x9 bg-img" style={{backgroundImage: 'url(https://picsum.photos/id/257/1920/1080)'}}></div>
        </div>
      </div>
      <CodeBox>
      {`
      <div class="bg-img" style="background-image:url('https://picsum.photos/id/257/1920/1080');"></div>

      <div class="bg-img" style="background-image:url('https://picsum.photos/id/257/1920/1080');"></div>
      `}
      </CodeBox>
      <CodeBox lang="css">
      {`
      .bg-image,
      .bg-img{
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
      }
      `}
      </CodeBox>

    </Layout>
    </>
  );
}
