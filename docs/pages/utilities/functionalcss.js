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
      <h2>Text align</h2>
      <div className="flex middle">
        <div className="col col-x1 ta-l">
          <p>ta-l Lorem ipsum dolor sit amet adiscipina</p>
        </div>
        <div className="col col-x1 ta-c">
          <p>ta-c Lorem ipsum dolor sit amet adiscipina</p>
        </div>
        <div className="col col-x1 ta-r">
          <p>ta-r Lorem ipsum dolor sit amet adiscipina</p>
        </div>
        <div className="col col-x1 ta-j">
          <p>ta-j Lorem ipsum dolor sit amet adiscipina</p>
        </div>
      </div>
      <CodeBox>
      {`
      <div class="ta-l">
        <p>Lorem ipsum dolor sit amet adiscipina</p>
      </div>
      <div class="ta-c">
        <p>Lorem ipsum dolor sit amet adiscipina</p>
      </div>
      <div class="ta-r">
        <p>Lorem ipsum dolor sit amet adiscipina</p>
      </div>
      <div class="ta-j">
        <p>Lorem ipsum dolor sit amet adiscipina</p>
      </div>
      `}
      </CodeBox>
      <CodeBox lang="css">
      {`
      .ta-l{text-align: left;}
      .ta-c{text-align: center;}
      .ta-r{text-align: right;}
      .ta-j{text-align: justify;}
      `}
      </CodeBox>

      <div className={'divider'}></div>

      <h2>Vertical align</h2>
      <div className="row">
        <div className="col col-x2 va-t">
          va-t
        </div>
        <div className="col col-x2" style={{height: '100px'}}>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col col-x2 va-m">
          va-m
        </div>
        <div className="col col-x2 va-m" style={{height: '100px'}}>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col col-x2 va-b">
          va-b
        </div>
        <div className="col col-x2 va-b" style={{height: '100px'}}>
        </div>
      </div>
      <CodeBox>
      {`
      <div>
        <div class="va-t"></div>
        <div style="height: 100px;"></div>
      </div>

      <div>
        <div class="va-m"></div>
        <div class="va-m" style="height: 100px;"></div>
      </div>

      <div>
        <div class="va-b"></div>
        <div class="va-b" style="height: 100px;"></div>
      </div>
      `}
      </CodeBox>
      <CodeBox lang="css">
      {`
      .va-t{vertical-align: top;}
      .va-m{vertical-align: middle;}
      .va-b{vertical-align: bottom;}
      `}
      </CodeBox>

    </Layout>
    </>
  );
}
