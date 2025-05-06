import { Box, CssBaseline } from "@mui/material";
import { Header } from "./Header";
import { useTheme } from "../context/ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Layout = ({ children }) => {
  const { darkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
