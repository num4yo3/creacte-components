import styled from "styled-components";

const BstyleList: { [key: string]: { [key: string]: string } } = {
  color: { filled: "#ffffff", outline: "#ffffff" },
  backgroundColor: { filled: "#333631", outline: "inherit" },
  border: { filled: "none", outline: "solid 1px" }
};

const SButton01 = styled.button`
  font-size: 1rem;
  /* font-weight: bold; */
  padding: 0.8rem;
  text-align: center;
  border-radius: 5px;
  color: ${(props) => BstyleList.color[props.type]};
  background-color: ${(props) => BstyleList.backgroundColor[props.type]};
  border: ${(props) => BstyleList.border[props.type]};
  &:hover {
    background-color: #554738;
  }
`;

export const Button01 = (props) => {
  return <SButton01 type="filled">{props.children}</SButton01>;
};
