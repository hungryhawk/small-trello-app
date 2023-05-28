import { style } from "@vanilla-extract/css";
import { variables } from "../../App.css";

export const sideForm = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

export const input = style({
  padding: variables.spacing.small,
  fontSize: variables.fontSizing.T4,
  minHeight: 30,
});

export const icon = style({
  color: variables.colors.brightText,
  fontSize: variables.fontSizing.T2,
  marginLeft: variables.spacing.medium,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});
