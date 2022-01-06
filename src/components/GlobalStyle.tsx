import React from "react";
import styled from "styled-components";

type SetStyle = {
  primary: string;
  secondary: string;
};
type ThemeList = {
  primary: { main: string };
  secondary: { main: string };
};
const Theme = styled.div`
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 20px;
  }
  p {
    color: black;
  }
  .card {
    background-color: #333631;
    color: #ffffff;
  }
`;

export const makeGlobalStyle = (props: SetStyle) => {
  const theme: ThemeList = {
    primary: { main: props.primary },
    secondary: { main: props.secondary }
  };
  return theme;
};

export const GlobalStyleSheet: React.FC<Props & ThemeList> = (props) => {
  const theme = props.theme;
  return <Theme theme={theme}>{props.children}</Theme>;
};
