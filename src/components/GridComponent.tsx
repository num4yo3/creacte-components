import React from "react";
import styled from "styled-components";

type Style = {
  height?: number;
  direction?: string;
  guid?: boolean;
};

const Root = styled.div.attrs<Style>((props) => ({
  height: props.height || "100%",
  direction: props.direction || "row",
  guid: props.guid
}))<Style>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction}; /* row, row-reverse, column, column-reverse */
  flex-wrap: nowrap; /* nowrap, wrap, wrap-reverse */
  justify-content: space-between; /* flex-start, flex-end, center, space-between, space-arround */
  align-items: center; /* stretch, flex-start, flex-end, center, baseline */
  align-content: center; /* stretch, flex-start, flex-end, center, space-between, space-arround */
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "100%")};
  ${(props) => props.guid && "outline: dotted 4px silver;"}
`;

const Item = styled.div.attrs((props) => ({
  width: props.width,
  guid: props.guid
}))`
  flex: 0 0 ${(props) => props.width + "%"};
  height: 100%;
  ${(props) => props.guid && "outline: dotted 2px black;"}
`;

export const GridContainer: React.FC<Props> = (props: Style) => {
  return (
    <Root height={props.height} guid={props.guid}>
      {props.children}
    </Root>
  );
};

export const GridItem: React.FC<Props> = (props) => {
  const { width, guid } = props;
  return (
    <Item width={width} guid={guid}>
      {props.children}
    </Item>
  );
};
