import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Header from "./header.js";
import Hours from "./components/hours";

import createTable from "./components/createTable";
import updateTable from "./components/updateTable";
import deleteTable from "./components/deleteTable";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <Hours />

      <Routes>
        <Route path="/" />
        <Route path="/createTable" element={<createTable />} />
        <Route path="/updateTable/:id" element={<updateTable />} />
        <Route path="/deleteTable/:id" element={<deleteTable />} />
      </Routes>
    </div>
  );
}

export default App;
