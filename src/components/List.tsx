import styled from "styled-components";
import { Typgrph } from "./Typgrph";

const SList = styled.div`
  /* position: relative;
  left: 0px; */
  padding: 5px 0px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  opacity: 1;
`;
const SListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0.5rem;
`;

export const List = (props) => {
  return <SList className="list">{props.children}</SList>;
};

export const ListItem = (props) => {
  const { content, subcontent } = props;
  return (
    <SListItem className="listitem">
      {subcontent !== undefined ? (
        <>
          <Typgrph type="body" margin="0.1rem">
            {content}
          </Typgrph>
          <Typgrph type="smbody" margin="0.1rem">
            {subcontent}
          </Typgrph>
        </>
      ) : (
        <Typgrph type="body">{content}</Typgrph>
      )}
    </SListItem>
  );
};
