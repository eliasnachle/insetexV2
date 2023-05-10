import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme/theme.css";

export const ContactItens = style({
  display: "grid",
  gridGap: "1em",
});

export const ContactItem = style({
  display: "flex",
  gap: "1rem",
  fontFamily: vars.fonts.DMSans,
  cursor: 'pointer'
});

globalStyle(`${ContactItem} > figure > svg`, {
  fontSize: "21px",
  color: vars.color.icon,  
});

globalStyle(`${ContactItem} > div > h3`, {
  fontSize: "18px",
  color: vars.color.blueText,
});

globalStyle(`${ContactItem} > div > p`, {
  paddingBottom: '.25rem',
  fontSize: "14px",
  color: vars.color.lightBlueText,
});

globalStyle(`${ContactItem} > div > span`, {
  fontSize: "15px",
  color: vars.color.btnColor,
  fontWeight: 600,
});
