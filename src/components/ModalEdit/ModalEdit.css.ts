import { style } from "@vanilla-extract/css";
import { variables } from "../App.css";

export const wrapper = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 1000000,
});

export const modalWindow = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "800px",
  height: "max-content",
  borderRadius: "30px",
  padding: "20px",
  boxShadow: variables.shadow.basic,
  backgroundColor: variables.colors.mainDarker,
  opacity: 0.95,
  color: variables.colors.brightText,
});

export const header = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "40px",
});

export const closeButton = style({
  fontSize: variables.fontSizing.T2,
  cursor: "pointer",
  marginTop: "-20px",
  ":hover": {
    opacity: 0.8,
  },
});

export const title = style({
  fontSize: variables.fontSizing.T2,
  color: variables.colors.brightText,
  marginRight: "auto",
  marginBottom: variables.spacing.medium,
});

export const buttons = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 50,
});

export const updateButton = style({
  border: "none",
  borderRadius: 5,
  fontSize: variables.fontSizing.T4,
  padding: variables.spacing.big2,
  marginRight: variables.spacing.big1,
  backgroundColor: variables.colors.updateButton,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

export const deleteButton = style({
  border: "none",
  borderRadius: 5,
  fontSize: variables.fontSizing.T4,
  padding: variables.spacing.big2,
  marginRight: variables.spacing.big1,
  backgroundColor: variables.colors.deleteButton,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

export const input = style({
  width: "100%",
  minHeight: "30px",
  border: "none",
  borderRadius: 5,
  marginBottom: variables.spacing.big2,
  padding: variables.spacing.medium,
  fontSize: variables.fontSizing.T4,
  boxShadow: variables.shadow.basic,
});
