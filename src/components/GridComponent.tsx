import React from "react";
import styled from "styled-components";

type SContainer = {
  maxWidth?: number;
  height?: number;
  direction?: string;
  wrap?: string;
  guid?: boolean;
};

type SItem = {
  xs: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  guid?: boolean;
};

const Wrap = styled.div.attrs<SContainer>((props) => ({
  maxWidth: props.maxWidth || "100%",
  height: props.height || "100%",
  direction: props.direction || "row",
  wrap: props.wrap || "wrap",
  guid: props.guid
}))<SContainer>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction}; /* row, row-reverse, column, column-reverse */
  flex-wrap: ${(props) => props.wrap}; /* nowrap, wrap, wrap-reverse */
  justify-content: space-around; /* flex-start, flex-end, center, space-between, space-around */
  align-items: center; /* stretch, flex-start, flex-end, center, baseline */
  align-content: flex-start; /* stretch, flex-start, flex-end, center, space-between, space-around */
  width: ${(props) => props.maxWidth};
  height: ${(props) => props.height + "px"};
  ${(props) => props.guid && "outline: dotted 4px silver;"}
  background-color: "red";
`;

const Item = styled.div.attrs<SItem>((props) => ({
  xs: props.xs,
  sm: props.sm,
  md: props.md,
  lg: props.lg,
  xl: props.xl,
  guid: props.guid
}))<SItem>`
  flex: 1 0 ${(props) => props.xs + "0%"};

  ${(props) => props.guid && "outline: dotted 2px black;"}

  @media (min-width: 600px) {
    flex: 1 0 ${(props) => props.sm + "0%"};
  }
`;

export const GridContainer: React.FC<Props> = (props) => {
  const { maxWidth, height, direction, wrap } = props;
  const guid: boolean = props.guid !== undefined ? true : false;

  return (
    <Wrap
      maxWidth={maxWidth}
      height={height}
      direction={direction}
      wrap={wrap}
      guid={guid}
    >
      {props.children}
    </Wrap>
  );
};

export const GridItem: React.FC<Props> = (props) => {
  const { xs, sm, md, lg, xl } = props;
  const guid: boolean = props.guid !== undefined ? true : false;
  return (
    <Item xs={xs} sm={sm} md={md} lg={lg} xl={xl} guid={guid}>
      {props.children}
    </Item>
  );
};
