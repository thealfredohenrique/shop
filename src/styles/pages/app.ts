import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
});

export const Bag = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.75rem",
  height: "48px",
  width: "48px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  variants: {
    variant: {
      gray: { backgroundColor: "$gray800" },
      green: { backgroundColor: "$green500" },
    },
  },
  position: "relative",

  span: {
    position: "absolute",
    top: "-1rem",
    right: "-1rem",
    height: "2rem",
    width: "2rem",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$green500",
    color: "$white",
    border: "3px solid $gray900",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "bold",
    textAlign: "center",
  },
});
