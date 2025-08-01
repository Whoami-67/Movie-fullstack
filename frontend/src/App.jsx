import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  function Logout() {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  function RegisterAndLogout() {
    localStorage.clear();
    return <Register />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieDetail/:id"
          element={
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/register"
          element={<RegisterAndLogout />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
