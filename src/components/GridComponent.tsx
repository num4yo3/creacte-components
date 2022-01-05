import React from "react";
import styled from "styled-components";

type SWrap = {
  height?: number;
  direction?: string;
  guid?: boolean;
};

type SItem = {
  width: number;
  guid?: boolean;
};

const Wrap = styled.div.attrs<SWrap>((props) => ({
  height: props.height || "100%",
  direction: props.direction || "row",
  guid: props.guid
}))<SWrap>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction}; /* row, row-reverse, column, column-reverse */
  flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
  justify-content: space-around; /* flex-start, flex-end, center, space-between, space-around */
  align-items: center; /* stretch, flex-start, flex-end, center, baseline */
  align-content: flex-start; /* stretch, flex-start, flex-end, center, space-between, space-around */
  width: 100%;
  height: ${(props) => props.height + "px"};
  ${(props) => props.guid && "outline: dotted 4px silver;"}
`;

const Item = styled.div.attrs<SItem>((props) => ({
  width: props.width,
  guid: props.guid
}))<SItem>`
  flex: 1 1 ${(props) => props.width + "0px"};
  ${(props) => props.guid && "outline: dotted 2px black;"}
`;

export const Grd: React.FC<Props> = (props) => {
  const { width, guid, height, direction } = props;
  const container: boolean = props.container !== undefined ? true : false;
  const item: boolean = props.item !== undefined ? true : false;
  if (container) {
    return (
      <Wrap height={height} direction={direction} guid={guid}>
        {props.children}
      </Wrap>
    );
  } else if (item) {
    return (
      <Item width={width} guid={guid}>
        {props.children}
      </Item>
    );
  } else {
    return null;
  }
};
