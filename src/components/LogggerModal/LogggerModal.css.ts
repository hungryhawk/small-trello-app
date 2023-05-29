import { style } from '@vanilla-extract/css';
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
  "linear-gradient(109.6deg, rgb(5, 85, 84) 11.2%, rgb(64, 224, 208) 91.1%)",
});

export const title = style({
  fontSize: variables.fontSizing.T3,
  color: variables.colors.brightText,
  marginBottom: variables.spacing.big1,
});
