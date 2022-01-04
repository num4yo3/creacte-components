import "./styles.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { GridComponent, GridItem } from "./components/GridComponent";

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
        <MathJax style={{ fontSize: "20px" }}>{`$\\int_0^x a^4$`}</MathJax>

        <GridComponent ratio={[3, 2, 1]} height={300} guid={true}>
          <GridItem n={1}>
            <div style={{ height: "100%" }}>Apple</div>
          </GridItem>
          <GridItem n={2}>
            <div>orange</div>
          </GridItem>
          <GridItem n={3}></GridItem>
        </GridComponent>
        <GridComponent ratio={[1, 2]} height={300} guid={true}>
          <GridItem n={1}></GridItem>
          <GridItem n={2}></GridItem>
        </GridComponent>
      </MathJaxContext>
    </>
  );
}
