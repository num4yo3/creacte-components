import styled from "styled-components";

const Root = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 1px 1px 4px;

  div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Card: React.FC<Props> = (props) => {
  return (
    <Root>
      <div>{props.children}</div>
    </Root>
  );
};
