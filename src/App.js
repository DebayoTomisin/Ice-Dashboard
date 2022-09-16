import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout";
import AppRouter from "./routes";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const { currentMode } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
