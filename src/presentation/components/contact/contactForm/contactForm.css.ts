import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme/theme.css";

export const formContainer = style({
  padding: "calc(80px + 2em) 2em",
  display: "grid",
  placeItems: "center",
});

globalStyle(`${formContainer} > h1`, {
  fontFamily: vars.fonts.DMSans,
  fontSize: "3em",
  fontWeight: 700,
  color: vars.color.blueText,
});

globalStyle(`${formContainer} > p`, {
  color: vars.color.lightBlueText,
  fontSize: "16px",
  fontWeight: 400,
  padding: ".25rem 0 2em 0",
  width: "500px",
  textAlign: "center"
});

globalStyle(`${formContainer} > div`, {
  display: "flex",
  flexDirection: "column",
  gap: "1.25em",
});

export const formInput = style({
  display: "flex",
  flexDirection: "column",
  fontFamily: vars.fonts.DMSans,
});

export const formTextArea = style({
  display: "flex",
  flexDirection: "column",
  fontFamily: vars.fonts.DMSans,
});

globalStyle(`${formInput} > label, ${formTextArea} > label`, {
  color: vars.color.blackText,
  opacity: 0.7,
  fontSize: "16px",
  fontWeight: 500,
  padding: "0 0 .25rem .25rem",
});

globalStyle(`${formInput} > input, ${formTextArea} > textarea`, {
  transition: "all ease-in 50ms",
  background: "#dedde921",
  height: "55px",
  width: "500px",
  fontSize: "16px",
  padding: "10px 15px",
  border: `2px solid #bab8cb`,
  borderRadius: "10px",
  outline: "none",
  fontFamily: vars.fonts.DMSans,
});

globalStyle(`${formInput} > span, ${formTextArea} > span`, {
  color: '#de071c',
  fontSize: '12px',
});

globalStyle(`${formTextArea} > textarea`, {
  height: "150px",
  resize: "none"
});

globalStyle(`${formInput} > input::placeholder, ${formTextArea} > textarea::placeholder`, {
  fontSize: "14px",
  fontFamily: vars.fonts.DMSans,
  fontWeight: 400,
  color: "#9795ab",
});

globalStyle(`${formInput} > input:focus, ${formTextArea} > textarea:focus`, {
  border: `2px solid #00a5ff`,
  background: "#00a5ff03"
});

globalStyle(`${formContainer} > div > button, ${formTextArea} > div > button`, {
  marginTop: '1em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  cursor: "pointer",
  transition: "all ease-in-out 150ms",
  fontFamily: vars.fonts.DMSans,
  fontSize: '15px',
  fontWeight: 600,
  background: "#00a5ff",
  color: vars.color.lightText,
  border: 'none',
  borderRadius: '10px',
  height: '60px',
});

globalStyle(`${formContainer} > div > button:hover`, {
    opacity: 0.7
});
