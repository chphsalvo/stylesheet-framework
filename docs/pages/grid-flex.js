import Head from "next/head";
import Link from "next/link";

import Header from "../components/header/header";

//import styles from '../styles/Home.module.css'

export default function GridFlex() {
  return (
    <>
    <Header></Header>

      <h1>GRID FLEX</h1>
      <h2>12 Columns</h2>
      <div className="flex">
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

      <div className="flex">
        <div className="col col-6">col col-6</div>
        <div className="col col-6">col col-6</div>
      </div>

      <div className="flex">
        <div className="col col-6">col col-6</div>
        <div className="col col-5 offset-1">col col-5 offset-1</div>
      </div>

      <h2>Percentage %</h2>
      <div className="flex">
        <div className="col col-x2">col col-x2</div>
        <div className="col col-x2">col col-x2</div>
      </div>

      <div className="flex">
        <div className="col col-x3">col col-x3</div>
        <div className="col col-x3">col col-x3</div>
        <div className="col col-x3">col col-x3</div>
      </div>

      <h2>Flexible</h2>
      <div className="flex">
        <div className="item item-1">item item-1</div>
        <div className="item item-1">item item-1</div>
        <div className="item item-1">item item-1</div>
        <div className="item item-1">item item-1</div>
      </div>

      <h2>Alignments</h2>
      <h3>flex top</h3>
      <div className="flex top">
        <div className="col col-6">col col-6</div>
        <div className="col col-6" style={{height:'100px'}}>col col-6</div>
      </div>

      <h3>flex middle</h3>
      <div className="flex middle">
        <div className="col col-6">col col-6</div>
        <div className="col col-6" style={{height:'100px'}}>col col-6</div>
      </div>

      <h3>flex bottom</h3>
      <div className="flex bottom">
        <div className="col col-6">col col-6</div>
        <div className="col col-6" style={{height:'100px'}}>col col-6</div>
      </div>
    </>
  );
}
