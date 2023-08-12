import { styled } from "@stitches/react";

export const CartContainer = styled("div", {
  position: "absolute",
  right: "0",
  top: "0",
  height: "100%",
  width: "30rem",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",
  padding: "1.5rem",

  header: {
    display: "flex",
    justifyContent: "flex-end",

    button: {
      backgroundColor: "transparent",
      border: "none",
      color: "#8d8d99",
      cursor: "pointer",
    },
  },

  h1: {
    color: "$gray100",
    fontSize: "1.25rem",
    fontWeight: "bold",
    lineHeight: "160%",
    padding: "1.5rem 0 3.5rem 0",
  },

  ul: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1.5rem",
    listStyle: "none",
    overflowY: "auto",
    marginBottom: "2rem",
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.25rem",
    marginTop: "auto",

    div: {
      display: "flex",
      justifyContent: "space-between",
    },

    span: {
      color: "gray100",
      fontSize: "1.25rem",
      lineHeight: "160%",
    },

    strong: {
      color: "gray100",
      fontSize: "1.5rem",
      fontWeight: "bold",
      lineHeight: "160%",
    },

    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.625rem",
      backgroundColor: "$green500",
      color: "$white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1.25rem",
      fontWeight: "bold",
      lineHeight: "160%",
      marginTop: "1.5rem",
      padding: "1.25rem 2rem",

      "&:hover": {
        backgroundColor: "$green300",
      },
    },
  },
});

export const CartItem = styled("li", {
  display: "flex",
  columnGap: "1.25rem",

  img: {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    border: 0,
    borderRadius: "8px",
    height: "76px",
    width: "76px",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",

    h2: {
      color: "$gray300",
      fontSize: "1.125rem",
      lineHeight: "160%",
    },

    strong: {
      color: "$gray100",
      fontSize: "1.125rem",
      fontWeight: "bold",
      lineHeight: "160%",
    },

    button: {
      backgroundColor: "transparent",
      border: "none",
      color: "$green500",
      cursor: "pointer",
      fontSize: "1.125rem",
      fontWeight: "bold",
      lineHeight: "160%",
      width: "min-content",

      "&:hover": {
        color: "$green300",
      },
    },
  },
});
