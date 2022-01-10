import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { GridContainer, GridItem } from "./components/GridComponent";
import Image01 from "../public/kenninji01.jpg";
import Image02 from "../public/fd401339.jpg";
import { Card, CardImage } from "./components/Card";
import { ParalaxBox } from "./components/animation/Paralax";
import { ScrollFadeIn } from "./components/animation/ScrollFadeIn";
import { makeGlobalStyle, GlobalStyleSheet } from "./components/GlobalStyle";
import { Typgrph } from "./components/Typgrph";
import { HeaderMenu } from "./components/HeaderMenu";
import { Divider } from "./components/Divider";
import { Paper } from "./components/Paper";
import { List, ListItem } from "./components/List";
import { Button01 } from "./components/Button";

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
        <GridContainer alignItems={"start"}>
          <GridItem xs={10}>
            <Divider width="100%" position="left" />
            <Typgrph type="h1">束の間の癒しと安らぎの時間</Typgrph>
            <Divider width="80%" position="left" />
            <Typgrph type="body">たまには都会の喧騒から逃れて、</Typgrph>
            <Typgrph type="body">
              閑静でお洒落な空間に身を投げ出したい。
            </Typgrph>
            <Typgrph type="body">
              ここだけは時間が止まっているかの如く、
            </Typgrph>
            <Typgrph type="body">古めかしくもあり懐かしさも匂わせる。</Typgrph>
          </GridItem>
          <GridItem xs={10} sm={4}>
            <ParalaxBox outerSize={300} innerSize={350} opposite={false}>
              <img src={Image02} alt="" style={{ width: "100%" }} />
            </ParalaxBox>
          </GridItem>
          <GridItem xs={10} sm={4}>
            <Typgrph type="h2">これは、りんご</Typgrph>
            <Divider width="80%" position="left" />
            <Typgrph type="body">
              そうこれは、りんご。まごうことなき、りんご。人はこれを「りんご」という。
            </Typgrph>
            <Button01>詳しく見る≫</Button01>
          </GridItem>

          <GridItem xs={8}>
            <Paper color="silver">
              <MathJax>{`$$x^2+3x-4=0$$`}</MathJax>
              <MathJax>{`$$(x+4)(x-1)=0$$`}</MathJax>
              <MathJax>{`$$x=1,-4$$`}</MathJax>
            </Paper>
          </GridItem>
          <GridItem xs={2}>
            <List>
              <ListItem content="Apple" subcontent="red fruit" />
              <Divider color="silver" />
              <ListItem content="Orange" subcontent="orange fruit" />
              <Divider color="silver" />
              <ListItem content="WaterMelon" subcontent="green fruit" />
            </List>
          </GridItem>

          <GridItem xs={10}>
            <Paper>
              <Typgrph type="h3">2次方程式の解き方</Typgrph>
              <Typgrph type="body">因数分解すること</Typgrph>
            </Paper>
          </GridItem>
          <GridItem xs={10}>
            <Card color="skyblue">
              <Typgrph type="body">AAA</Typgrph>
            </Card>
          </GridItem>
          <GridItem xs={10}>
            <Card color="silver">
              <p>BBBBBBB</p>
            </Card>
          </GridItem>
          <GridItem xs={5}>
            <ScrollFadeIn offset={{ x: 0, y: 100 }} adjust={-100}>
              <Card maxWidth={300} color="black" direction="column">
                <CardImage src={Image01} alt="" width={300} height={200} />
                <Typgrph type="h3">Fruits</Typgrph>
                <Typgrph type="body">
                  Apples and Green apples appear in the left photo. Oh, I found
                  a melon as well !
                </Typgrph>
              </Card>
            </ScrollFadeIn>
          </GridItem>

          <GridItem xs={5}>
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
          <GridItem xs={10}>a</GridItem>
        </GridContainer>
      </MathJaxContext>
    </GlobalStyleSheet>
  );
}
