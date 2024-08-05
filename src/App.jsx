import DataTable from "./components/DataTable";
import React from "react";
function App() {
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl my-10 font-bold text-center">FMSCA Viewer</h1>
        <DataTable />
      </div>
    </>
  );
}

export default App;
