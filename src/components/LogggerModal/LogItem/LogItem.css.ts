import { style } from '@vanilla-extract/css';
import { variables } from '../../App.css';

export const logItemWrap = style({
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  padding: variables.spacing.medium,
  marginBottom: variables.spacing.big2,
  width: '100%',
  borderBottom: 'solid 1px rgb(191, 197, 217, 0.3)',
  ':hover': {
    backgroundColor: variables.colors.mainFadedBright,
    borderRadius: 10,
    transform: 'scale(1.03)',
  },
});

export const message = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: variables.colors.brightText,
  fontWeight: 'bold',
  fontSize: variables.fontSizing.T4,
  marginBottom: variables.spacing.small,
});

export const author = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 10,
  color: 'white',
  fontSize: variables.fontSizing.T3,
  fontWeight: 'bold',
  marginBottom: variables.spacing.medium,
});

export const date = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: 'white',
  fontSize: variables.fontSizing.T4,
  fontWeight: 'bold',
  marginBottom: variables.spacing.medium,
});
