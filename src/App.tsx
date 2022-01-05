import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Grd } from "./components/GridComponent";
import Image01 from "../public/fd401339.jpg";
import { Card, CardImage } from "./components/card";
import { ParalaxBox } from "./components/Paralax";

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
        <Grd container guid={true}>
          <Grd item width={50} guid={false}>
            <MathJax
              style={{ fontSize: "12px", color: "red" }}
            >{`$$x^2+3x-4=0$$`}</MathJax>
            <MathJax style={{ fontSize: "12px" }}>{`$$(x+4)(x-1)=0$$`}</MathJax>
            <MathJax style={{ fontSize: "12px" }}>{`$$x=1,-4$$`}</MathJax>
          </Grd>
          <Grd item width={50} guid={false}>
            <Card maxWidth={300} color="silver">
              <h2>2次方程式の解き方</h2>
              <p>因数分解すること</p>
            </Card>
          </Grd>
          <Grd item width={30} guid={false}>
            <Card maxWidth={300} color="skyblue">
              <p>AAA</p>
            </Card>
          </Grd>
          <Grd item width={60} guid={false}>
            <Card maxWidth={300} color="black" direction="column">
              <CardImage src={Image01} alt="" width={300} height={200} />
              <div style={{ color: "white", padding: "0 10px" }}>
                <h3>Fruits</h3>
                <p>
                  Apples and Green apples appear in the left photo. Oh, I found
                  a melon as well !
                </p>
              </div>
            </Card>
          </Grd>
          <Grd item width={70} guid={false}>
            <ParalaxBox width={300} outerSize={120} innerSize={100}>
              <Card maxWidth={300} color="silver">
                <p>BBBBBBB</p>
              </Card>
            </ParalaxBox>
          </Grd>
          <Grd item width={30} guid={false}>
            <Card maxWidth={300} color="silver">
              <p>BBBBBBB</p>
            </Card>
          </Grd>
          <Grd item width={100} guid={false}>
            <Card maxWidth={300} color="silver">
              <CardImage src={Image01} alt="" width={300} height={200} />
              <h3>Colorful</h3>
              <p>BBBBBBB</p>
            </Card>
          </Grd>
        </Grd>
      </MathJaxContext>
    </>
  );
}
