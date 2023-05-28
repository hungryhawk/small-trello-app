import { style } from "@vanilla-extract/css";
import { variables } from "../App.css";

export const listsContainer = style({
  height: "max-content",
  display: "flex",
  flexWrap: "wrap",
  rowGap: variables.spacing.listSpacing,
  margin: variables.spacing.listSpacing,
});
