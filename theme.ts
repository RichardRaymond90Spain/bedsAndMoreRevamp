"use client"

import { createTheme } from "@/lib/node_modules/@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9E8B8E", // Mauve
      light: "#BFB0B3",
      dark: "#7E6B6E",
    },
    secondary: {
      main: "#E5DCD7", // Cream
      light: "#F5F0ED",
      dark: "#C5BCB7",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F0ED",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        },
      },
    },
  },
})

