import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { GridContainer, GridItem } from "./components/GridComponent";
import Image01 from "../public/fd401339.jpg";
import { Card } from "./components/card";

const config = {
  "fast-preview": {
    disabled: true
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  },
  messageStyle: "none"
};

export default function App() {
  return (
    <>
      <MathJaxContext version={2} config={config}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <GridContainer height={300} guid={true}>
          <GridItem width={20} guid={true}>
            <MathJax style={{ fontSize: "12px" }}>{`$$x^2+3x-4=0$$`}</MathJax>
            <MathJax style={{ fontSize: "12px" }}>{`$$(x+4)(x-1)=0$$`}</MathJax>
            <MathJax style={{ fontSize: "12px" }}>{`$$x=1,-4$$`}</MathJax>
          </GridItem>
          <GridItem width={20} guid={true}>
            <Card>
              <h2>2次方程式の解き方</h2>
              <p>因数分解すること</p>
            </Card>
          </GridItem>
          <GridItem width={20} guid={true}>
            <Card>
              <p>AAA</p>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer height={300} guid={false}>
          <GridItem width={30} guid={true}>
            <div
              style={{ width: "300px", height: "250px", overflow: "hidden" }}
            >
              <img src={Image01} alt="" style={{ width: "100%" }} />
            </div>
          </GridItem>
          <GridItem width={20}>
            <h2>Happy New Year! </h2>
            <p>あけましておめでとう</p>
            <p>今年もよろしく</p>
          </GridItem>
        </GridContainer>

        <GridContainer height={300} guid={false}>
          <GridItem width={20}></GridItem>
          <GridItem width={20}>
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <img src={Image01} alt="" style={{ width: "100%" }} />
            </div>
          </GridItem>
        </GridContainer>
      </MathJaxContext>
    </>
  );
}
