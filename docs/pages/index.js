import Head from "next/head";
import Link from "next/link";

//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      HOMEPAGE

      <ul>
        <li>
            <Link href="/grid">
                <a>Grid</a>
            </Link>
        </li>
      </ul>

    </div>
  );
}
