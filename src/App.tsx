import React from "react";
import Exhibition from "./pages/Exhibition";

function App() {
  return (
    <div className="dark relative min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <div className="scanlines" />
      <Exhibition />
    </div>
  );
}

export default App;
