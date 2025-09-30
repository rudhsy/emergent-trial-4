import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
