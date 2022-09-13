import HomePage from "@pages/HomePage";
import SchoolPage from "@pages/SchoolPage";
import AdminSchoolsPage from "@pages/AdminSchoolPage";
import AdminCreateSchoolPage from "@pages/AdminCreateSchoolPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools/:id" element={<SchoolPage />} />
        <Route path="/admin/schools" element={<AdminSchoolsPage />} />
        <Route
          path="/admin/schools/create"
          element={<AdminCreateSchoolPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
