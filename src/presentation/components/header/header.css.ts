import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/theme.css'

export const headerContainer = style({
  fontFamily: 'DM Sans',
  width: '100%',
  height: '80px',
  padding: '.5rem 1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `inset 0 -1px 0 ${vars.color.headerShadow}`,
});

export const headerLogo = style({
  display: 'block'
});

globalStyle(`${headerLogo} > svg`, {
  width: '5em',
  fontSize: '2em'
});

globalStyle(`${headerContainer} > nav`, {
  display: 'flex',
  width: '1080px',
  alignItems: 'center',
  justifyContent: 'center'
});

globalStyle(`${headerContainer} > nav > ul`, {
  display: 'flex',
  listStyle: 'none',
  gap: '1.5em'  
});

globalStyle(`${headerContainer} > nav > ul > li`, {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  height: '80px'
});
