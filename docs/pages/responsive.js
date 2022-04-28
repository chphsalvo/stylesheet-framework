import Head from "next/head";
import Link from "next/link";

import Header from "../components/header/header";
import Layout from "./layout/layout";
import CodeBox from "../components/codeBox/codeBox";

//import styles from '../styles/Home.module.css'

export default function Responsive() {
  return (
    <>
    <Header></Header>
    
    <Layout>
        <h1>RESPONSIVE</h1>
        <h2></h2>
        
        <table className={'table ta-l'}>
        <thead>
          <tr>
            <th><b>Class</b></th>
            <th><b>Name</b></th>
            <th><b>Width</b></th>
            <th><b>CSS</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-s- (col, item, d, fs, ta, va)<br></br>Eg. ta-s-c, col-s-x1</td>
            <td>small</td>
            <td>640px</td>
            <td>@media (max-width: 640px)</td>
          </tr>
          <tr>
            <td>-m-</td>
            <td>medium</td>
            <td>768px</td>
            <td>@media (max-width: 768px)</td>
          </tr>
          <tr>
            <td>-l-</td>
            <td>large</td>
            <td>1024px</td>
            <td>@media (max-width: 1024px)</td>
          </tr>
          <tr>
            <td></td>
            <td>xlarge</td>
            <td>1366px</td>
            <td>@media (max-width: 1366px)</td>
          </tr>
          <tr>
            <td></td>
            <td>big</td>
            <td>1440px</td>
            <td>@media (max-width: 1440px)</td>
          </tr>
          <tr>
            <td>-xb-</td>
            <td>xbig</td>
            <td>1600px</td>
            <td>@media (min-width: 1600px)</td>
          </tr>
          <tr>
            <td></td>
            <td>huge</td>
            <td>2560px</td>
            <td>@media (min-width: 2560px)</td>
          </tr>
        </tbody>
      </table>

    </Layout>
    </>
  );
}
