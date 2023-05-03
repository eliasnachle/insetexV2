import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/theme.css'

export const btnStyle = style({
    transition: 'all ease-in-out 150ms',
    background: vars.color.btnColor,
    color: vars.color.lightText,
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    padding: '1em 2.5em',
    textTransform: 'uppercase',
    border: 'none',
    fontWeight: 800,
    fontSize: '14px',
    ':hover': {
        background: vars.color.darkBtn
    },
});