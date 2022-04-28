import Head from "next/head";
import Link from "next/link";

import Header from "../components/header/header";
import Layout from "../pages/layout/layout";
import CodeBox from "../components/codeBox/codeBox";

//import styles from '../styles/Home.module.css'

export default function GridFlex() {
  return (
    <>
    <Header></Header>
    
    <Layout>
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

        <CodeBox>
        {`
        <div class="flex">
            <div class="col col-1"></div>
            <div class="col col-1"></div>
            <div class="col col-1"></div>
            ...
        </div>
        `}
        </CodeBox>

        <div className="flex">
          <div className="col col-6">col col-6</div>
          <div className="col col-6">col col-6</div>
        </div>

        <CodeBox>
        {`
        <div class="flex">
          <div class="col col-6"></div>
          <div class="col col-6"></div>
        </div>
        `}
        </CodeBox>

        <CodeBox lang="css">
        {`
        .flex{display: flex;}
        `}
        </CodeBox>

        <div className={'divider'}></div>

        <h2>Offset</h2>

        <div className="flex">
          <div className="col col-6">col col-6</div>
          <div className="col col-5 offset-1">col col-5 offset-1</div>
        </div>

        <CodeBox>
        {`
        <div class="flex">
          <div class="col col-6"></div>
          <div class="col col-5 offset-1"></div>
        </div>
        `}
        </CodeBox>

        <div className={'divider'}></div>

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

        <CodeBox>
        {`
        <div class="flex">
          <div class="col col-x2"></div>
          <div class="col col-x2"></div>
        </div>

        <div class="flex">
          <div class="col col-x3"></div>
          <div class="col col-x3"></div>
          <div class="col col-x3"></div>
        </div>
        `}
        </CodeBox>

        <div className={'divider'}></div>

        <h2>Flexible</h2>
        <div className="flex">
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
        </div>

        <div className="flex">
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
        </div>

        <div className="flex">
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
        </div>

        <br></br>
        <br></br>
        <div className="flex">
          <div className="item item-2">item item-2</div>
          <div className="item item-1">item item-1</div>
        </div>
        <div className="flex">
          <div className="item item-2">item item-2</div>
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
        </div>
        <div className="flex">
          <div className="item item-3">item item-3</div>
          <div className="item item-1">item item-1</div>
          <div className="item item-1">item item-1</div>
        </div>

        <CodeBox lang="css">
        {`
        .flex.item-1{flex-grow: 1; flex-basis: 0;}
        .flex.item-2{flex-grow: 2; flex-basis: 0;}
        .flex.item-3{flex-grow: 3; flex-basis: 0;}
        `}
        </CodeBox>

        <div className={'divider'}></div>

        <h2>Vertical Alignments</h2>
        <h3>flex top</h3>
        <div className="flex top">
          <div className="col col-6"></div>
          <div className="col col-6" style={{height:'100px'}}></div>
        </div>
        <CodeBox>
        {`
        <div class="flex top">
          <div class="col col-6"></div>
          <div class="col col-6" style="height: 100px;"></div>
        </div>
        `}
        </CodeBox>

        <CodeBox lang="css">
        {`
        .flex.top{align-items: flex-start;}
        `}
        </CodeBox>

        <h3>flex middle</h3>
        <div className="flex middle">
          <div className="col col-6"></div>
          <div className="col col-6" style={{height:'100px'}}></div>
        </div>
        <CodeBox>
        {`
        <div class="flex middle">
          <div class="col col-6"></div>
          <div class="col col-6" style="height: 100px;"></div>
        </div>
        `}
        </CodeBox>

        <CodeBox lang="css">
        {`
        .flex.middle{align-items: center;}
        `}
        </CodeBox>

        <h3>flex bottom</h3>
        <div className="flex bottom">
          <div className="col col-6"></div>
          <div className="col col-6" style={{height:'100px'}}></div>
        </div>
        <CodeBox>
        {`
        <div class="flex bottom">
          <div class="col col-6"></div>
          <div class="col col-6" style="height: 100px;"></div>
        </div>
        `}
        </CodeBox>

        <CodeBox lang="css">
        {`
        .flex.middle{align-items: flex-end;}
        `}
        </CodeBox>

        <div className={'divider'}></div>

        <h2>Horizontal Alignments</h2>
        <h3>flex left</h3>
        <div className="flex left">
          <div className="col col-6"></div>
        </div>
        <CodeBox>
        {`
        <div class="flex left">
          <div class="col col-6"></div>
        </div>
        `}
        </CodeBox>

        <h3>flex center</h3>
        <div className="flex center">
          <div className="col col-6"></div>
        </div>
        <CodeBox>
        {`
        <div class="flex center">
          <div class="col col-6"></div>
        </div>
        `}
        </CodeBox>

        <h3>flex right</h3>
        <div className="flex right">
          <div className="col col-6"></div>
        </div>
        <CodeBox>
        {`
        <div class="flex right">
          <div class="col col-6"></div>
        </div>
        `}
        </CodeBox>

    </Layout>
    </>
  );
}
