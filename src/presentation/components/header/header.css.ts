import { globalStyle, style } from '@vanilla-extract/css';

export const headerContainer = style({
  width: '100%',
  height: '80px',
  padding: '.5rem 1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'inset 0 -1px 0 #f3f3f4'
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
  fontSize: '16px',
  cursor: 'pointer'
});
