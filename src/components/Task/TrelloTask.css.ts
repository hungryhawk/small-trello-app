import { style } from '@vanilla-extract/css';
import { variables } from '../App.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: variables.spacing.medium,
  backgroundColor: variables.colors.task,
  borderRadius: 10,
  marginBottom: variables.spacing.big2,
  boxShadow: variables.shadow.basic,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: variables.colors.taskHover,
    transform: 'scale(1.03)',
  },
});

export const title = style({
  fontSize: variables.fontSizing.T4,
  fontWeight: 'bold',
  marginBottom: variables.spacing.small,
});

export const description = style({
  fontSize: variables.fontSizing.P1,
});
