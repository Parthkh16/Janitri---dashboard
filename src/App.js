// src/App.js
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import Product from "./scenes/Products/products";
import LoginPage from "./scenes/login";
import InstallationScene from "./scenes/installation";
import ServiceScene from "./scenes/service/service";

import ContractScene from "./scenes/contract";
import AlertScene from "./scenes/alert";

import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // Check login status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLoggedIn ? (
            <>
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  {/* Protected Routes */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/products" element={<Product />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/installation" element={<InstallationScene />} />
                  <Route path="/service" element={<ServiceScene />} />
                  <Route path="/contract" element={<ContractScene />} />
                  <Route path="/alert" element={<AlertScene />} />

                  {/* Redirect any unknown protected route */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </>
          ) : (
            /* Public Login Route */
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              {/* Redirect to login if not authenticated */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
