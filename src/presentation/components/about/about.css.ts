import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/theme.css'

export const aboutContainer = style({
    padding: 'calc(2em + 80px) 2em',
    display: 'grid',
    placeItems: 'center',
    gap: '4em'
});

globalStyle(`${aboutContainer} > div`, {
    maxWidth: vars.sizes.desktopWidth,
    width: '100%',    
});

globalStyle(`${aboutContainer} > div > article > h1`, {
    fontFamily: vars.fonts.DMSans,
    fontSize: '60px',
    fontWeight: 700,
    color: vars.color.blueText,
});

globalStyle(`${aboutContainer} > div > article > p`, {
    fontFamily: vars.fonts.DMSans,
    color: vars.color.lightBlueText,
    fontSize: '18px',
    lineHeight: '40px',
});

export const historyContainer = style({
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '800px auto',
    "@media": {
        "screen and (max-width: 1080px)": {
            gridTemplateColumns: "none"
        },
    },
});

globalStyle(`${historyContainer} > div`, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1em',
    justifyContent: 'space-evenly',
    "@media": {
        "screen and (max-width: 1080px)": {
            flexDirection: "row"
        },
    },
});

export const historyItens = style({
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '800px auto',
});

globalStyle(`${historyItens} > div`, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1em',
});

globalStyle(`${historyItens} > div > svg`, {
    color: vars.color.primary,
    fontSize: '3.5em',
    background: vars.color.backgroundGray,
    borderRadius: '100px',
    padding: '12px'

});

globalStyle(`${historyItens} > div > h2`, {
    fontFamily: vars.fonts.DMSans,
    color: vars.color.blueText,
    fontSize: '30px',
    fontWeight: 500
});

globalStyle(`${historyItens} > div > span`, {
    fontFamily: vars.fonts.DMSans,
    color: vars.color.blueText,
    fontSize: '18px',
    fontWeight: 500
});

export const serviceContainer = style({
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: 'auto 700px',
    "@media": {
        "screen and (max-width: 1080px)": {
            gridTemplateColumns: "none"
        },
    },
});

globalStyle(`${serviceContainer} > figure`, {        
    "@media": {
        "screen and (max-width: 1080px)": {
            display: "none"
        },
    },
});

export const customersContainer = style({
    margin: 'auto',
    overflow: 'hidden',
    WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);'
});

const scroll = keyframes({
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(calc(-120px * 6))' }
});

globalStyle(`${customersContainer} > div`, {        
    display: 'flex',
    gap: '5em',
    animation: `${scroll} 40s linear infinite`,
});

globalStyle(`${customersContainer} > div > img`, {
    width: '120px',
    height: '50px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.4
});