import { style } from "@vanilla-extract/css";
import { variables } from "../App.css";

export const listWrapper = style({
  display: "flex",
  flexDirection: "column",
  marginRight: variables.spacing.listSpacing,
  padding: variables.spacing.big2,
  minWidth: variables.minWidth.list,
  width: "max-content",
  height: "max-content",
  borderRadius: 10,
  backgroundColor: variables.colors.list,
});

export const name = style({
  fontSize: variables.fontSizing.T3,
  marginBottom: variables.spacing.big2,
});

export const header = style({
  display: "flex",
  alignItems: "center",
});

export const deleteButton = style({
  padding: variables.spacing.small,
  borderRadius: 20,
  fontSize: variables.fontSizing.T2,
  marginLeft: "auto",
  marginTop: "-15px",
  marginRight: "5px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: variables.colors.task,
    boxShadow: variables.shadow.basic,
    opacity: 0.8,
  },
});
