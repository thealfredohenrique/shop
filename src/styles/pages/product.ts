import { styled } from "@stitches/react";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 492,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    color: "$gray300",
    fontSize: "$2xl",
  },

  span: {
    color: "$green300",
    display: "block",
    fontSize: "$2xl",
    marginTop: "1rem",
  },

  p: {
    color: "$gray300",
    fontSize: "$md",
    lineHeight: 1.6,
    marginTop: "2.5rem",
  },

  button: {
    backgroundColor: "$green500",
    color: "$white",
    border: 0,
    borderRadius: 8,
    fontSize: "$md",
    fontWeight: "bold",
    marginTop: "auto",
    padding: "1.25rem",
    cursor: "pointer",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});
