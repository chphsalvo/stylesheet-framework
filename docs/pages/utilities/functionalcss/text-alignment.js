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
      <h2>Text align</h2>

      <table className={'table ta-l'}>
        <thead>
          <tr>
            <th><b>Class</b></th>
            <th><b>Properties</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ta-l, text-left</td>
            <td>text-align: left;</td>
          </tr>
          <tr>
            <td>ta-c, text-center</td>
            <td>text-align: center;</td>
          </tr>
          <tr>
            <td>ta-r, text-right</td>
            <td>text-align: right;</td>
          </tr>
          <tr>
            <td>ta-j, text-justify</td>
            <td>text-align: justify;</td>
          </tr>
        </tbody>
      </table>

      <br></br>
      <br></br>
      <br></br>

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
      {/* <CodeBox lang="css">
      {`
      .ta-l{text-align: left;}
      .ta-c{text-align: center;}
      .ta-r{text-align: right;}
      .ta-j{text-align: justify;}
      `}
      </CodeBox> */}

      {/* <div className={'divider'}></div> */}

    </Layout>
    </>
  );
}
