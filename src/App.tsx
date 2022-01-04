import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { GridComponent, GridItem } from "./components/GridComponent";
import { ScrollFadeIn } from "./components/ScrollFadeIn";
import Image01 from "../public/fd401339.jpg";

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

        <GridComponent ratio={[40, 40, 20]} height={300} guid={false}>
          <GridItem n={1}>
            <MathJax style={{ fontSize: "20px" }}>
              {`$\\int_0^2 x^4 dx$`}
            </MathJax>
          </GridItem>
          <GridItem n={2}>
            <div>orange</div>
          </GridItem>
          <GridItem n={3}>Grape</GridItem>
        </GridComponent>

        <GridComponent ratio={[40, 60]} height={300} guid={false}>
          <GridItem n={1}>
            <div
              style={{ width: "300px", height: "250px", overflow: "hidden" }}
            >
              <img src={Image01} alt="" style={{ width: "100%" }} />
            </div>
          </GridItem>
          <GridItem n={2}></GridItem>
        </GridComponent>
        <ScrollFadeIn offset={{ x: 0, y: 100 }} adjust={-150}>
          <h2>ScrollFadeIn</h2>
          <p>スクロールすると要素が下からフェードインするよ</p>
        </ScrollFadeIn>

        <GridComponent ratio={[60, 40]} height={300} guid={false}>
          <GridItem n={1}></GridItem>
          <GridItem n={2}>
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <img src={Image01} alt="" style={{ width: "100%" }} />
            </div>
          </GridItem>
        </GridComponent>
      </MathJaxContext>
    </>
  );
}
