import styled from "styled-components";

const elevList: { [key: number]: string } = {
  0: "0px 0px 0px rgba(0,0,0,1)",
  1: "1px 1px 2px rgba(0,0,0,1)",
  2: "1px 2px 4px rgba(0,0,0,1)",
  3: "1px 3px 6px rgba(0,0,0,0.9)",
  4: "1px 4px 8px rgba(0,0,0,0.85)"
};

const radList: { [key: string]: string } = {
  default: "5px",
  square: "none",
  elliptic: "20rem"
};

const SPaper = styled.div`
  margin: 2px;
  padding: 2px;
  box-shadow: ${elevList[2]};
  border-radius: ${radList["square"]};
  overflow: hidden;
`;

export const Paper = (props) => {
  const { children } = props;
  return <SPaper className="paper">{children}</SPaper>;
};
