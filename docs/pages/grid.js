import Head from "next/head";
import Link from "next/link";

//import styles from '../styles/Home.module.css'

export default function Grid() {
  return (
    <div className="">
      GRID
      <div className="row">
        <div className="col col-6"><span>col col-6</span></div>
        <div className="col col-6"><span>col col-6</span></div>
      </div>

      <br></br>
      <br></br>

      <div className="row">
        <div className="col col-4"><span>col col-4</span></div>
        <div className="col col-4"><span>col col-4</span></div>
        <div className="col col-4"><span>col col-4</span></div>
      </div>

      <br></br>
      <br></br>

      <div className="row">
        <div className="col col-x3"><span>col col-x3</span></div>
        <div className="col col-x3"><span>col col-x3</span></div>
        <div className="col col-x3"><span>col col-x3</span></div>
      </div>

    </div>
  );
}
