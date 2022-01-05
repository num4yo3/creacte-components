import styled from "styled-components";
type PCard = {
  maxWidth?: number;
  color: string;
  direction?: string;
};

type PCardImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const Root = styled.div.attrs<PCard>((props) => ({
  maxWidth: props.maxWidth + "px" || "100%",
  color: props.color,
  direction: props.direction || "column"
}))<PCard>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction}; /* row, row-reverse, column, column-reverse */
  position: relative;
  margin: 2px;
  max-width: ${(props) => props.maxWidth};
  /* border: solid 1px; */
  border-radius: 5px;
  box-shadow: 1px 1px 2px;
  background-color: ${(props) => props.color};
  overflow: hidden;
`;

export const Card: React.FC<PCard> = (props) => {
  return (
    <Root
      maxWidth={props.maxWidth}
      color={props.color}
      direction={props.direction}
    >
      {props.children}
    </Root>
  );
};

export const CardImage: React.FC<PCardImage> = (props) => {
  const { src, alt, width, height } = props;
  const compStyle = {
    width,
    height,
    overflow: "hidden"
  };
  return (
    <div style={compStyle}>
      <img src={src} alt={alt} />
    </div>
  );
};
