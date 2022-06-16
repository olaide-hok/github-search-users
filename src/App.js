import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./pages/PublicRoute";

function App() {
  return (
    // <AuthWrapper>
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
    // </AuthWrapper>
  );
}

export default App;
