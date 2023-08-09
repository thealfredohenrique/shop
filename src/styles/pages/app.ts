import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});

export const Bag = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.75rem",
  height: "48px",
  width: "48px",
  backgroundColor: "$gray800",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
});
