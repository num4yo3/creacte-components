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
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  background-color: #a58f86;

  .card {
    background-color: #333631;
    color: #ffffff;
  }
  .paper {
    background-color: #333631;
    color: #ffffff;
  }
  .headermenu {
    background-color: #333631;
    color: #ffffff;
  }
  .list {
    background-color: #333631;
    color: #ffffff;
  }
  .listitem:hover {
    background-color: #554738;
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
