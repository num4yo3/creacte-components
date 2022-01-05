import React from "react";
import { useRef } from "react";
import styled from "styled-components";

type Style = {
  className?: string;
  width?: number;
  height?: number;
  direction?: string;
  guid?: boolean;
};

const Root = styled.div.attrs<Style>((props) => ({
  className: props.className,
  width: props.width || "100%",
  height: props.height || "100%",
  direction: props.direction || "row",
  guid: props.guid
}))<Style>`
  .cont {
    display: flex;
    flex-direction: ${(props) =>
      props.direction}; /* row, row-reverse, column, column-reverse */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    justify-content: space-between; /* flex-start, flex-end, center, space-between, space-arround */
    align-items: center; /* stretch, flex-start, flex-end, center, baseline */
    align-content: flex-start; /* stretch, flex-start, flex-end, center, space-between, space-arround */
    width: 100%;
    height: ${(props) => props.height + "px"};
    ${(props) => props.guid && "outline: dotted 4px silver;"}
  }

  .item {
    width: ${(props) => props.width + "％"};
    ${(props) => props.guid && "outline: dotted 2px black;"}
  }
  div {
    width: 100%;
  }
`;

export const Grd: React.FC<Props> = (props) => {
  const { width, guid, height, direction } = props;
  const container: boolean = props.container !== undefined ? true : false;
  const item: boolean = props.item !== undefined ? true : false;
  const gridClass: string = item ? "item" : container ? "cont" : "";
  return (
    <Root width={width} height={height} direction={direction} guid={guid}>
      <div className={gridClass}>{props.children}</div>
    </Root>
  );
};
