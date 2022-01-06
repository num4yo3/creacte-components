import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { GridContainer, GridItem } from "./components/GridComponent";
import Image01 from "../public/fd401339.jpg";
import { Card, CardImage } from "./components/card";
import { ParalaxBox } from "./components/Paralax";
import { ScrollFadeIn } from "./components/ScrollFadeIn";

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
        <GridContainer guid>
          <GridItem xs={10} sm={6}>
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <img src={Image01} alt="" style={{ width: "100%" }} />
            </div>
          </GridItem>
          <GridItem xs={10} sm={4}>
            <h2>これは、りんご</h2>
            <p>そうこれは、りんご。まごうことなきりんご。</p>
          </GridItem>

          <GridItem xs={10}>
            <Card color="silver">
              <MathJax
                style={{ fontSize: "12px", color: "red" }}
              >{`$$x^2+3x-4=0$$`}</MathJax>
              <MathJax
                style={{ fontSize: "12px" }}
              >{`$$(x+4)(x-1)=0$$`}</MathJax>
              <MathJax style={{ fontSize: "12px" }}>{`$$x=1,-4$$`}</MathJax>
            </Card>
          </GridItem>
          <GridItem xs={10}>
            <Card color="silver">
              <h2>2次方程式の解き方</h2>
              <p>因数分解すること</p>
            </Card>
          </GridItem>
          <GridItem xs={10}>
            <Card color="skyblue">
              <p>AAA</p>
            </Card>
          </GridItem>
          <GridItem xs={6}>
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
          </GridItem>
          <GridItem xs={4}>
            <ParalaxBox outerSize={150} innerSize={130}>
              <Card color="silver">
                <div style={{ color: "white", padding: "0 10px" }}>
                  <h3>Paralax Effect</h3>
                  <p>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
                </div>
              </Card>
            </ParalaxBox>
          </GridItem>
          <GridItem xs={4}>
            <Card color="silver">
              <p>BBBBBBB</p>
            </Card>
          </GridItem>
          <GridItem xs={1}>
            <ScrollFadeIn offset={{ x: 0, y: 100 }} adjust={-100}>
              <Card maxWidth={300} color="silver">
                <CardImage src={Image01} alt="" width={300} height={200} />
                <h3>Colorful</h3>
                <p>red, green, yellow and orange can be seen. How about you?</p>
              </Card>
            </ScrollFadeIn>
          </GridItem>
          <GridItem xs={3}>
            <Card maxWidth={300} color="silver">
              <p>BBBBBBB</p>
            </Card>
          </GridItem>
        </GridContainer>
      </MathJaxContext>
    </>
  );
}
