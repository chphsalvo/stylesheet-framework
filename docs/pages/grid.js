import Head from "next/head";
import Link from "next/link";

import Header from "../components/header/header";
import Layout from "../pages/layout/layout";
import CodeBox from "../components/codeBox/codeBox";

//import styles from '../styles/Home.module.css'

export default function Grid() {
  return (
    <>
    <Header></Header>

    <Layout>
      <h1>GRID</h1>
      <h2>12 Columns</h2>
      <div className="row">
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
        <div className="col col-1">col col-1</div>
      </div>
      <CodeBox>
      {`
      <div class="row">
        <div class="col col-1"></div>
        <div class="col col-1"></div>
        <div class="col col-1"></div>
        ...
      </div>
      `}
      </CodeBox>

      <div className="row">
        <div className="col col-6">col col-6</div>
        <div className="col col-6">col col-6</div>
      </div>
      <CodeBox>
      {`
      <div class="row">
        <div class="col col-6"></div>
        <div class="col col-6"></div>
      </div>
      `}
      </CodeBox>

      <div className={'divider'}></div>

      <h2>% Percentage</h2>
      <div className="row">
        <div className="col col-x2">col col-x2</div>
        <div className="col col-x2">col col-x2</div>
      </div>
      <div className="row">
        <div className="col col-x3">col col-x3</div>
        <div className="col col-x3">col col-x3</div>
        <div className="col col-x3">col col-x3</div>
      </div>
      <CodeBox>
      {`
      <div class="row">
        <div class="col col-x2"></div>
        <div class="col col-x2"></div>
      </div>

      <div class="row">
        <div class="col col-x3"></div>
        <div class="col col-x3"></div>
        <div class="col col-x3"></div>
      </div>
      `}
      </CodeBox>

      <div className={'divider'}></div>

      <h2>Vetical Alignments</h2>
      <h3>row top</h3>
      <div className="row top">
        <div className="col col-6">col col-6</div>
        <div className="col col-6" style={{height:'100px'}}>col col-6</div>
      </div>
      <CodeBox>
      {`
      <div class="row top">
        <div class="col col-6"></div>
        <div class="col col-6" style="height: 100px;"></div>
      </div>
      `}
      </CodeBox>

      <h3>row middle</h3>
      <div className="row middle">
        <div className="col col-6">col col-6</div>
        <div className="col col-6" style={{height:'100px'}}>col col-6</div>
      </div>
      <CodeBox>
      {`
      <div class="row middle">
        <div class="col col-6"></div>
        <div class="col col-6" style="height: 100px;"></div>
      </div>
      `}
      </CodeBox>

      <h3>row bottom</h3>
      <div className="row bottom">
        <div className="col col-6">col col-6</div>
        <div className="col col-6" style={{height:'100px'}}>col col-6</div>
      </div>
      <CodeBox>
      {`
      <div class="row bottom">
        <div class="col col-6"></div>
        <div class="col col-6" style="height: 100px;"></div>
      </div>
      `}
      </CodeBox>

      <h2>Horizontal Alignments</h2>
      <h3>row left</h3>
      <div className="row left ta-l">
        <div className="col col-6">col col-6</div>
      </div>
      <CodeBox>
      {`
      <div class="row left">
        <div class="col col-6"></div>
      </div>
      `}
      </CodeBox>

      <h3>row center</h3>
      <div className="row center ta-c">
        <div className="col col-6">col col-6</div>
      </div>
      <CodeBox>
      {`
      <div class="row center">
        <div class="col col-6"></div>
      </div>
      `}
      </CodeBox>

      <h3>row right</h3>
      <div className="row right ta-r">
        <div className="col col-6">col col-6</div>
      </div>
      <CodeBox>
      {`
      <div class="row right">
        <div class="col col-6"></div>
      </div>
      `}
      </CodeBox>

    </Layout>
    </>
  );
}
