import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme/theme.css";

export const serviceContainer = style({
  padding: "3em",
  display: "grid",
  placeItems: "center",
  "@media": {
    "screen and (max-width: 720px)": {
      padding: "2em 1em"
    },
  },
});

export const serviceItensContainer = style({
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: "repeat(3,20em)",
  gridGap: "2em 3em",
  "@media": {
    "screen and (max-width: 1200px)": {
      gridGap: "1em 2em",
      gridTemplateColumns: "repeat(3,15em)",
    },
    "screen and (max-width: 920px)": {
      gridGap: ".5rem 2em",
      gridTemplateColumns: "repeat(2,15em)",
    },
    "screen and (max-width: 720px)": {
      gridGap: "2em",
      gridTemplateColumns: "none",
    },
  },
});

globalStyle(`${serviceContainer} > article`, {
  maxWidth: vars.sizes.desktopWidth,
  display: "grid",
  placeItems: "center",
  gridGap: "3em",
});

globalStyle(`${serviceContainer} > article > h1`, {
  color: vars.color.blueText,
  fontSize: "clamp(1em, 2.5vw, 3em)",
  fontWeight: 700,
  textAlign: "center",
  maxWidth: "650px",
});

export const serviceItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  height: "400px",
  cursor: "pointer",
  "@media": {
    "screen and (max-width: 1200px)": {
      height: "450px",
    },
    "screen and (max-width: 720px)": {
        height: "auto",
        alignItems: "center",
        textAlign: "center"
    },
  },
});

export const serviceItemSvg = style({
  transition: "all ease 150ms",
  width: "4em",
  fontWeight: 600,
  fill: vars.color.icon,
  ":hover": {
    opacity: "0.6",
  },
});

globalStyle(`${serviceItem} > h2`, {
  color: vars.color.blueText,
  fontSize: "1.5em",
  fontWeight: 700,
});

globalStyle(`${serviceItem} > p`, {
  fontFamily: "DM Sans",
  color: vars.color.lightBlueText,
  fontSize: "14px",
  fontWeight: 300,
  lineHeight: "25px",
});
