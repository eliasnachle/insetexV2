import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme/theme.css'

export const serviceContainer = style({        
    padding: '3em',
    display: 'grid',
    placeItems: 'center',
});

export const serviceItensContainer = style({
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(3,20em)',
    gridGap: '2em 3em',
});

globalStyle(`${serviceContainer} > article`, {
    maxWidth: vars.sizes.desktopWidth,
    display: 'grid',
    placeItems: 'center',
    gridGap: '3em'
});

globalStyle(`${serviceContainer} > article > h1`, {
    color: vars.color.blueText,
    fontSize: '3em',
    fontWeight: 700,
    textAlign: 'center',
    width: '650px'
});

export const serviceItem = style({    
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    height: '400px',
    cursor: 'pointer',
});

export const serviceItemSvg = style({
    transition: 'all ease 150ms',
    width: '4em',
    fontWeight: 600,
    fill: vars.color.icon,
    ':hover': {
        opacity: '0.6'
    },
});

globalStyle(`${serviceItem} > h2`, {    
    color: vars.color.blueText,
    fontSize: '1.5em',
    fontWeight: 700
});

globalStyle(`${serviceItem} > p`, {
    fontFamily: 'DM Sans',
    color: vars.color.lightBlueText,
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '25px',
});
