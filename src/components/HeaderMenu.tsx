import { Typgrph } from "./Typgrph";

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
        <Typgrph type="smbody">命蓮寺カフェ-テラス</Typgrph>
        <Typgrph type="h2">鵺之住処</Typgrph>
      </div>
      <Typgrph type="button">About</Typgrph>
      <Typgrph type="button">Menu</Typgrph>
      <Typgrph type="button">Garalley</Typgrph>
      <Typgrph type="button">Event</Typgrph>
    </div>
  );
};
