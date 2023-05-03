import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme/theme.css";

export const chevron = style({
  fontFamily: "DM Sans",
  zIndex: "100",
  position: "absolute",
  marginTop: "-30px",
  marginRight: "20px",
  background: vars.color.backgroundDark,
  width: "15px",
  height: "15px",
  transform: "rotate(-45deg)",
});

export const dropdownContainer = style({
  background: vars.color.backgroundDark,
  padding: "1.5em",
  position: "absolute",
  marginTop: "315px",
  borderRadius: "5px",
});

export const dropdownHidden = style({
  display: "none",
});

export const dropdownVisible = style({
  display: "block",
});

globalStyle(`${dropdownContainer} > ul`, {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "1.25em",
});

globalStyle(`${dropdownContainer} > ul > li`, {
  color: vars.color.lightText,
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 600,
});
