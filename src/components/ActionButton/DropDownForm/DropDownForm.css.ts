import { style } from "@vanilla-extract/css";
import { variables } from "../../App.css";

export const taskForm = style({
  display: "flex",
  flexDirection: "column",
  height: "max-content",
  borderRadius: 4,
  marginTop: variables.spacing.small,
  fontSize: variables.fontSizing.T3,
  padding: variables.spacing.medium,
});

export const listForm = style({
  display: "flex",
  flexDirection: "column",
  marginRight: variables.spacing.listSpacing,
  padding: variables.spacing.big2,

  width: "max-content",
  height: "max-content",
  borderRadius: 20,
  backgroundColor: variables.colors.list,
});

export const input = style({
  padding: variables.spacing.medium,
  fontSize: variables.fontSizing.P1,
  minHeight: 60,
  marginBottom: variables.spacing.medium,
  border: "none",
  boxShadow: variables.shadow.basic,
  borderRadius: 4,
  resize: "none",
  overflow: "hidden",
  wordWrap: "break-word",
});

export const button = style({
  width: 150,
  color: variables.colors.brightText,
  padding: variables.spacing.medium,
  fontSize: variables.fontSizing.T3,
  backgroundColor: "green",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "lightgreen",
  },
});

export const buttons = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const close = style({
  marginLeft: variables.spacing.big2,
  fontSize: variables.fontSizing.T1,
  opacity: 0.5,
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
});
