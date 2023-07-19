import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  html: {
    fontSize: "12px",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  "body, button, input, textarea": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
