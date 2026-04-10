import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { TokyoPlanner } from "./pages/TokyoPlanner.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/tokyo-planner" element={<TokyoPlanner />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  </StrictMode>,
);
