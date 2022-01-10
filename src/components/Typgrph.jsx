import styled from "styled-components";

const typographyList = {
  fontSize: {
    h1: "2.8rem",
    h2: "2rem",
    h3: "1.4rem",
    h4: "1rem",
    body: "1rem",
    smbody: "0.7rem",
    btn: "1rem"
  },
  fontWeight: {
    h1: "bold",
    h2: "bold",
    h3: "bold",
    h4: "bold",
    body: "nomal",
    smbody: "nomal",
    btn: "bold"
  },
  margin: {
    h1: "1rem 1.4rem",
    h2: "0.5rem 1rem",
    h3: "0.5rem 1rem 0rem 1rem",
    h4: "0.5rem 1rem 0rem 1rem",
    body: "0.3rem 1rem",
    smbody: "0.3rem 1rem",
    margin: "0.3rem 1rem",
    btn: "0"
  }
};

const STypography = styled.div`
  font-size: ${(props) => typographyList.fontSize[props.type]};
  font-weight: ${(props) => typographyList.fontWeight[props.type]};
  margin: ${(props) =>
    props.margin ? props.margin : typographyList.margin[props.type]};
`;

export const Typgrph = (props) => {
  return (
    <STypography type={props.type} margin={props.margin}>
      {props.children}
    </STypography>
  );
};
