import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/theme.css'

export const footerContainer = style({   
    fontFamily: 'DM Sans', 
    background: vars.color.backgroundBlack,
    color: vars.color.lightText,
    display: 'grid',
    placeItems: 'center',
});

export const footerContent = style({    
    maxWidth: vars.sizes.desktopWidth,
    width: '100%'
});

export const footerGrid = style({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '.5rem',
    padding: '45px 0'
});

globalStyle(`${footerGrid} > article`, {
    width: '300px'
});

globalStyle(`${footerGrid} > article > svg`, {
    width: '200px'
});

export const footerCopyrigth = style({    
    padding: '20px 0',
    fontSize: '14px',
    color: vars.color.grayText
});

