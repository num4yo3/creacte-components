import { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";

type State = {
  top: string;
  outerSize: number;
  innerSize: number;
};
type Props = {
  width?: number;
  outerSize: number;
  innerSize: number;
  opposite?: boolean;
};

const Paralax = styled.div.attrs<Props>((props) => ({
  width: props.width + "px" || "100%",
  ousterSize: props.outerSize,
  innerSize: props.innerSize,
  opposite: props.opposite || false
}))<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.outerSize + "px"};
  position: relative;
  left: 0px;
  top: 0px;
  // border: solid 1px black;
  overflow: hidden;

  .wrapper {
    position: absolute;
    width: 100%;
    height: ${(props) => props.innerSize + "px"};
    // border: solid 1px grey;
    overflow: hidden;
  }
`;

const useParalax = (
  ref: React.RefObject<HTMLDivElement>,
  outerSize: number,
  innerSize: number,
  opposite: boolean
) => {
  const [state, setState] = useState<State>({
    top: opposite ? outerSize - innerSize + "px" : "0px",
    outerSize: outerSize,
    innerSize: innerSize
  });
  const nodeStyle = useMemo(
    () => ({
      left: "0px",
      top: state.top
    }),
    [state.top]
  );

  useEffect(() => {
    const onScroll = () => {
      if (ref.current === null) return;

      const scroll: number = window.scrollY;
      const windowHeight = window.innerHeight;
      const offsetTop: number = ref.current.offsetTop;
      const transY: number =
        ((outerSize - innerSize) * (scroll + windowHeight - offsetTop)) /
        (windowHeight + outerSize);

      if (scroll + windowHeight > offsetTop && scroll < offsetTop + outerSize) {
        setState((prev) =>
          !opposite
            ? {
                ...state,
                top: `${transY}px`
              }
            : {
                ...state,
                top: `${outerSize - innerSize - transY}px`
              }
        );
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return nodeStyle;
};

export const ParalaxBox = (props: {
  width?: number;
  outerSize: number;
  innerSize: number;
  opposite?: boolean;
  children?: Object;
}) => {
  const ref = useRef(null);
  const { width, outerSize, innerSize, opposite = false, children } = props;

  const ParaStyle = useParalax(ref, outerSize, innerSize, opposite);
  return (
    <Paralax
      ref={ref}
      width={width}
      outerSize={outerSize}
      innerSize={innerSize}
      opposite={opposite}
    >
      <div className="wrapper" style={ParaStyle}>
        {children}
      </div>
    </Paralax>
  );
};
