import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { TokyoPlanner } from "./pages/TokyoPlanner.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/Layout.jsx";
import { About } from "./pages/About.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/tokyo-planner" element={<TokyoPlanner />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  </StrictMode>,
);
