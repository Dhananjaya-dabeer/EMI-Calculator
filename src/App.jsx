import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Calculator } from "./pages/Calculator";
import { About } from "./pages/About";
import { NotFound } from "./components/NotFound";
import { ErrorPage } from "./pages/ErrorPage";
import { Layout } from "./components/Layout";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <Layout>
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/error" element={<ErrorPage />} />
              </Routes>
            </ErrorBoundary>
          </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
