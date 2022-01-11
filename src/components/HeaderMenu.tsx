import { Typgrph } from "./Typgrph.jsx";
import { Button01 } from "./Button";

export const HeaderMenu = () => {
  return (
    <div
      className="headermenu"
      style={{
        position: "fixed",
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0px 2px 3px rgb(0,0,0)",
        zIndex: "1"
      }}
    >
      <div>
        <Typgrph type="smbody" margin="0">
          sub title
        </Typgrph>
        <Typgrph type="h2" margin="0">
          LOGO
        </Typgrph>
      </div>
      <Button01>ABOUT</Button01>
      <Button01>MENU</Button01>
      <Button01>GARALLY</Button01>
      <Button01>EVENT</Button01>
    </div>
  );
};
