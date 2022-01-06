import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { GridContainer, GridItem } from "./components/GridComponent";
import Image01 from "../public/kenninji01.jpg";
import Image02 from "../public/fd401339.jpg";
import { Card, CardImage } from "./components/card";
import { ParalaxBox } from "./components/Paralax";
import { ScrollFadeIn } from "./components/ScrollFadeIn";
import { makeGlobalStyle, GlobalStyleSheet } from "./components/GlobalStyle";
import { Typgrph } from "./components/Typgrph";
import { HeaderMenu } from "./components/HeaderMenu";

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
      <MathJaxContext version={2} config={config}>
        <HeaderMenu />
        <img src={Image01} alt="" style={{ width: "100%" }} />
        <Typgrph type="h1">束の間の癒しと安らぎの時間</Typgrph>
        <Typgrph type="body">
          たまには都会の喧騒から逃れて、閑静でお洒落な空間に身を投げ出したい。
        </Typgrph>
        <Typgrph type="body">
          ここだけは時間が止まっているかの如く、古めかしくもあり懐かしさも匂わせる。
        </Typgrph>
        <GridContainer guid>
          <GridItem xs={10} sm={6}>
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <img src={Image02} alt="" style={{ width: "100%" }} />
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
              <Typgrph type="body">AAA</Typgrph>
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
                <CardImage src={Image02} alt="" width={300} height={200} />
                <Typgrph type="h3">Colorful</Typgrph>
                <Typgrph type="body">
                  red, green, yellow and orange can be seen. How about you?
                </Typgrph>
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
