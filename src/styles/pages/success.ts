import { styled } from "@stitches/react";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  height: 492,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImagesContainer = styled("div", {
  display: "flex",
  marginLeft: "2rem",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 128,
  height: 128,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 9999,
  padding: "0.25rem",
  marginTop: "4rem",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.80)",

  img: {
    objectFit: "cover",
  },

  "+ div": {
    transform: "translateX(-2rem)",
  },
});
