import Head from "next/head";
import Link from "next/link";

import Header from "../../../components/header/header";
import Layout from "../../layout/layout";
import CodeBox from "../../../components/codeBox/codeBox";

// import styles from './text-alignment.module.scss'

export default function Grid() {

  // const classesProperties = {
  //   class : '',
  //   properties : '',
  // }

  return (
    <>
    <Header></Header>

    <Layout>
      <h2>Vertical align</h2>

      <table className={'table ta-l'}>
        <thead>
          <tr>
            <th><b>Class</b></th>
            <th><b>Properties</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>va-t, align-top</td>
            <td>vertical-align: top;</td>
          </tr>
          <tr>
            <td>va-m, align-middle</td>
            <td>vertical-align: middle;</td>
          </tr>
          <tr>
            <td>va-b, align-bottom</td>
            <td>vertical-align: bottom;</td>
          </tr>
        </tbody>
      </table>

      <br></br>
      <br></br>
      <br></br>

      <div className="row">
        <div className="col col-x2 va-t">
          va-t
        </div>
        <div className="col col-x2 va-t" style={{height: '100px'}}>
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
        <div class="va-t" style="height: 100px;"></div>
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
      {/* <CodeBox lang="css">
      {`
      .va-t{vertical-align: top;}
      .va-m{vertical-align: middle;}
      .va-b{vertical-align: bottom;}
      `}
      </CodeBox> */}

    </Layout>
    </>
  );
}
