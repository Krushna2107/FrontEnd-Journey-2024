import React from "react";
import AppRoutes from "./routes";
import { Header } from "./Components/Header";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <AppRoutes />
    </GlobalProvider>
  );
}

export default App;
