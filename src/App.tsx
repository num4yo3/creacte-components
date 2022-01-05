import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Grd } from "./components/GridComponent";
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
        <Grd container height={300} guid={true}>
          <Grd item width={50} guid={true}>
            <MathJax style={{ fontSize: "12px" }}>{`$$x^2+3x-4=0$$`}</MathJax>
            <MathJax style={{ fontSize: "12px" }}>{`$$(x+4)(x-1)=0$$`}</MathJax>
            <MathJax style={{ fontSize: "12px" }}>{`$$x=1,-4$$`}</MathJax>
          </Grd>
          <Grd item width={50} guid={true}>
            <Card>
              <h2>2次方程式の解き方</h2>
              <p>因数分解すること</p>
            </Card>
          </Grd>
          <Grd item width={20} guid={true}>
            <Card>
              <p>AAA</p>
            </Card>
          </Grd>
          <Grd item width={20} guid={true}>
            <Card>
              <p>BBBBBBB</p>
            </Card>
          </Grd>
        </Grd>
      </MathJaxContext>
    </>
  );
}
