import styled from "styled-components";

const HorizontalLine = styled.hr`
  width: ${(props) => props.width};
  margin-left: ${(props) => props.position === "left" && "0px"};
  margin-right: ${(props) => props.position === "right" && "0px"};
  margin-top: 1px;
  margin-bottom: 1px;
  border-top: solid 1px rgba(0, 0, 0, 0.5);
  border-bottom: none;
  border-left: none;
  border-right: none;
`;

export const Divider = (props) => {
  const { width, color, position } = props;
  return <HorizontalLine width={width} color={color} position={position} />;
};
