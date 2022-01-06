const typographyList = {
  h1: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    margin: "1rem 1.4rem"
  },
  h2: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0.5rem 1rem"
  },
  h3: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    margin: "0.5rem 1rem"
  },

  h4: {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0.5rem 1rem"
  },

  body: {
    fontSize: "1rem",
    margin: "0.5rem 1rem"
  },
  smbody: {
    fontSize: "0.7rem",
    margin: "0.5rem 1rem"
  },
  button: {
    fontsize: "1.2rem",
    fontWeight: "bold",
    margin: "0"
  }
};

export const Typgrph = (props) => {
  const { type, children } = props;
  return <div style={typographyList[type]}>{children}</div>;
};
