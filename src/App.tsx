import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { GridContainer, GridItem } from "./components/GridComponent";
import Image01 from "../public/fd401339.jpg";
import { Card, CardImage } from "./components/card";
import { ParalaxBox } from "./components/Paralax";
import { ScrollFadeIn } from "./components/ScrollFadeIn";
import { makeGlobalStyle, GlobalStyleSheet } from "./components/GlobalStyle";
import { Typgrph } from "./components/Typgrph";

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
  const theme = makeGlobalStyle({ primary: "red", secondary: "blue" });
  return (
    <GlobalStyleSheet theme={theme}>
      <div style={{ backgroundColor: "brown" }}>
        <GridContainer wrap="nowrap">
          <GridItem xs={4}>Logo</GridItem>
          <GridItem xs={1}>ABOUT</GridItem>
          <GridItem xs={1}>PRODUCT</GridItem>
          <GridItem xs={1}>FRENDS</GridItem>
        </GridContainer>
      </div>
      <MathJaxContext version={2} config={config}>
        <Typgrph type="h1">Hello CodeSandbox</Typgrph>
        <Typgrph type="h2">Start editing to see some magic happen!</Typgrph>
        <GridContainer guid>
          <GridItem xs={10} sm={6}>
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <img src={Image01} alt="" style={{ width: "100%" }} />
            </div>
          </GridItem>
          <GridItem xs={10} sm={4}>
            <Typgrph type="h2">これは、りんご</Typgrph>
            <Typgrph type="body">
              そうこれは、りんご。まごうことなき、りんご。人はこれを「りんご」という。
            </Typgrph>
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
              <Typgrph type="h3">2次方程式の解き方</Typgrph>
              <Typgrph type="body">因数分解すること</Typgrph>
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
              <Typgrph type="h3">Fruits</Typgrph>
              <Typgrph type="body">
                Apples and Green apples appear in the left photo. Oh, I found a
                melon as well !
              </Typgrph>
            </Card>
          </GridItem>
          <GridItem xs={4}>
            <ParalaxBox outerSize={300} innerSize={200}>
              <Card color="silver">
                <Typgrph type="h3">Paralax Effect</Typgrph>
                <Typgrph type="body">
                  BB BB BB BB BB BB BB BB BB BB BB BB BB BB BB BB BB BB BB BB
                </Typgrph>
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
    </GlobalStyleSheet>
  );
}
