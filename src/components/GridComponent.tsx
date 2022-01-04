import React from "react";
import styled from "styled-components";

type Style = {
  ratio: number[];
  height?: number;
  guid?: boolean;
};

const Root = styled.div`
  display: flex;
  flex-direction: row; /* row, row-reverse, column, column-reverse */
  flex-wrap: nowrap; /* nowrap, wrap, wrap-reverse */
  justify-content: center; /* flex-start, flex-end, center, space-between, space-arround */
  align-items: center; /* stretch, flex-start, flex-end, center, baseline */
  align-content: center; /* stretch, flex-start, flex-end, center, space-between, space-arround */
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "100%")};
  ${(props) => props.guid && "outline: dotted 4px silver;"}

  .item-01 {
    flex: 0 0 ${(props) => props.ratio[0] + "%"};
    height: 100%;
    ${(props) => props.guid && "outline: solid 1px skyblue;"}
  }
  .item-02 {
    flex: 0 0 ${(props) => props.ratio[1] + "%"};
    height: 100%;
    ${(props) => props.guid && "outline: solid 1px skyblue;"}
  }
  .item-03 {
    flex: 0 0 ${(props) => props.ratio[2] + "%"};
    height: 100%;
    ${(props) => props.guid && "outline: solid 1px skyblue;"}
  }
  .item-04 {
    flex-grow: ${(props) => props.ratio[3] + "%"};
    height: 100%;
    ${(props) => props.guid && "outline: solid 1px skyblue;"}
  }
  .item-05 {
    flex-grow: ${(props) => props.ratio[4] + "%"};
    height: 100%;
    ${(props) => props.guid && "outline: solid 1px skyblue;"}
  }
`;

export const GridComponent: React.FC<Props> = (props: Style) => {
  return (
    <Root height={props.height} ratio={props.ratio} guid={props.guid}>
      {props.children}
    </Root>
  );
};

export const GridItem: React.FC<Props> = (props) => {
  return (
    <div
      className={"item-0" + props.n}
      style={props.height && { height: props.height }}
    >
      {props.children}
    </div>
  );
};
