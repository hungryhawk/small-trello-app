import { style } from "@vanilla-extract/css";
import { variables } from "../App.css";

export const taskButton = style({
  display: "flex",
  alignItems: "center",
  height: "max-content",
  borderRadius: 4,
  marginTop: variables.spacing.small,
  fontSize: variables.fontSizing.T3,
  padding: variables.spacing.medium,
  cursor: "pointer",
  ":hover": {
    backgroundColor: variables.colors.secondaryDarkTextHover,
  },
});

export const listButton = style({
  display: "flex",
  alignItems: "center",
  height: "max-content",
  borderRadius: 4,
  minWidth: variables.minWidth.list,
  marginTop: variables.spacing.small,
  color: variables.colors.brightText,
  fontSize: variables.fontSizing.T3,
  paddingTop: variables.spacing.small,
  paddingBottom: variables.spacing.small,
  paddingRight: variables.spacing.big2,
  paddingLeft: variables.spacing.big2,
  cursor: "pointer",
  backgroundColor: variables.colors.mainFaded,
  ":hover": {
    backgroundColor: variables.colors.mainFadedBright,
  },
});
