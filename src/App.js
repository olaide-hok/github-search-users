import React from "react";
import { Dashboard, Login, PrivateRoute, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./pages/PublicRoute";

function App() {
  return (
    <Router>
      <Routes>       
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Dashboard />
            // </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            // <PublicRoute>
              <Login />
            // </PublicRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
