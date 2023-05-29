import { style } from "@vanilla-extract/css";
import { variables } from "../App.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  rowGap: 15,
  minHeight: "max-content",
  padding: variables.spacing.big2,
  backgroundColor: "green",
});

export const title = style({
  color: variables.colors.brightText,
  fontSize: variables.fontSizing.T2,
  marginRight: variables.spacing.big1,
});

export const addButton = style({
  color: variables.colors.brightText,
  fontSize: variables.fontSizing.T2,
  cursor: "pointer",
  marginLeft: variables.spacing.big1,
  ":hover": {
    opacity: 0.8,
  },
});

export const boardItem = style({
  color: variables.colors.brightText,
  fontSize: variables.fontSizing.T3,
  backgroundColor: variables.colors.mainFaded,
  padding: variables.spacing.medium,
  borderRadius: 10,
  cursor: "pointer",
  marginRight: variables.spacing.big1,
  ":hover": {
    opacity: 0.8,
    transform: "scale(1.03)",
  },
});

export const boardItemActive = style({
  color: variables.colors.brightText,
  fontSize: variables.fontSizing.T3,
  backgroundColor: variables.colors.selectedTab,
  padding: variables.spacing.medium,
  borderRadius: 10,
  cursor: "pointer",
  marginRight: variables.spacing.big1,
});

export const addSection = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

export const smallTitle = style({
  color: variables.colors.brightText,
  fontSize: variables.fontSizing.T3,
});
