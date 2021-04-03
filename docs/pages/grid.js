import Head from "next/head";
import Link from "next/link";

import Header from "../components/header/header";
import Layout from "../pages/layout/layout";

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

      <div className="row">
        <div className="col col-6">col col-6</div>
        <div className="col col-6">col col-6</div>
      </div>

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

      <h2>Alignments</h2>
      <div className="row">
        <div className="col col-8 va-m" style={{height:'50px'}}>col col-8 va-m</div>
        <div className="col col-4 va-m" style={{height:'100px'}}>col col-4 va-m</div>
      </div>

      <div className="row">
        <div className="col col-8 va-t" style={{height:'50px'}}>col col-8 va-t</div>
        <div className="col col-4 va-t" style={{height:'100px'}}>col col-4 va-t</div>
      </div>

      <div className="row">
        <div className="col col-8 va-b" style={{height:'50px'}}>col col-8 va-b</div>
        <div className="col col-4 va-b" style={{height:'100px'}}>col col-4 va-b</div>
      </div>

    </Layout>
    </>
  );
}
