import styled from "styled-components";

const Root = styled.div.attrs((props) => ({
  color: props.color
}))`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 1px 1px 4px;
  background-color: ${(props) => props.color};

  div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Card: React.FC<Props> = (props) => {
  return (
    <Root color="silver">
      <div>{props.children}</div>
    </Root>
  );
};
