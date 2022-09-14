import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout";
import AppRouter from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
