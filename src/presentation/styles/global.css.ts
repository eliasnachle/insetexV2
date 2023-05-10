import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, *', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
});

globalStyle('main', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between'
});