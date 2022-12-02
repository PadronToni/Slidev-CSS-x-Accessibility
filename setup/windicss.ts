import { defineWindiSetup } from "@slidev/types";

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  theme: {
    colors: {
      gray: {
        "50": "#f7f7f7",
        "100": "#e3e3e3",
        "200": "#c8c8c8",
        "300": "#a4a4a4",
        "400": "#818181",
        "500": "#666666",
        "600": "#515151",
        "700": "#434343",
        "800": "#383838",
        "900": "#1b1b1b",
      },
      primary: {
        "50": "#f2fbf9",
        "100": "#d3f4ed",
        "200": "#a6e9db",
        "300": "#72d6c6",
        "400": "#44bdac",
        "500": "#2a9d8f",
        "600": "#208177",
        "700": "#1d6861",
        "800": "#1c534f",
        "900": "#1b4642",
      },
      secondary: {
        "50": "#f0fafb",
        "100": "#d9f2f4",
        "200": "#b7e4ea",
        "300": "#85d0db",
        "400": "#4cb2c4",
        "500": "#3196a9",
        "600": "#2b798f",
        "700": "#296475",
        "800": "#295361",
        "900": "#264653",
      },
      green: {
        "50": "#f1fcf5",
        "100": "#defaea",
        "200": "#bef4d5",
        "300": "#8beab6",
        "400": "#52d68d",
        "500": "#33d17a",
        "600": "#1d9c56",
        "700": "#1b7a46",
        "800": "#1a613b",
        "900": "#175033",
      },
      yellow: {
        "50": "#fdf9ed",
        "100": "#f8edcd",
        "200": "#f0d997",
        "300": "#e9c46a",
        "400": "#e2ab3d",
        "500": "#da8d26",
        "600": "#c16c1e",
        "700": "#a04f1d",
        "800": "#833e1d",
        "900": "#6c331b",
      },
      red: {
        "50": "#fdf5f3",
        "100": "#fde8e3",
        "200": "#fbd6cd",
        "300": "#f8b9a9",
        "400": "#f19078",
        "500": "#e76f51",
        "600": "#d3502f",
        "700": "#b14024",
        "800": "#933821",
        "900": "#7a3422",
      },
    },
  },
}));
