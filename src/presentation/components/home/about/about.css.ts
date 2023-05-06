import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme/theme.css";

export const AboutContainer = style({
  fontFamily: "DM Sans",
  backgroundAttachment: "fixed",
  backgroundImage: "url(/home/control_pest_mall.jpg)",
  backgroundPosition: 0,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "20em",
  width: "100%",
  position: "relative",
  marginBottom: "100px",
  "@media": {
    "screen and (max-width: 720px)": {
      marginTop: "80px"
    },
  },
});

globalStyle(`${AboutContainer} > div`, {
  display: "grid",
  placeItems: "center",
});

globalStyle(`${AboutContainer} > div > article`, {
  padding: "2em",
  display: "grid",
  placeItems: "center",
  top: "-40px",
  position: "absolute",
  width: "700px",
  height: "25em",
  background: "linear-gradient(28deg,#2b5ba2 35%,#30aded 97%)",
  "@media": {
    "screen and (max-width: 720px)": {
      width: "calc(100% - 50px)",
      gridGap: "1em",
      padding: "1em",
      minHeight: "25em",
      height: "auto"
    },
  },
});

globalStyle(`${AboutContainer} > div > article > svg`, {
  width: "30em",
  "@media": {
    "screen and (max-width: 720px)": {
      width: "15em",
      paddingBottom: "1em"
    },
  },
});

globalStyle(`${AboutContainer} > div > article > p`, {
  color: vars.color.lightText,
  textAlign: "center",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "2em",
});
