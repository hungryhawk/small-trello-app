import { style, createGlobalTheme } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { variables } from '../App.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 300,
  maxWidth: 300,
  height: 500,
  padding: variables.spacing.big1,
  opacity: 0.7,
  marginLeft: 'auto',
  overflowX: 'hidden',
  background:
    'linear-gradient(180deg, rgba(84,154,208,1) 1%, rgba(84,154,208,1) 45%, rgba(1,121,191,1) 100%)',
});

export const title = style({
  fontSize: variables.fontSizing.T3,
  color: variables.colors.brightText,
  marginBottom: variables.spacing.big1,
});
