import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
function App() {
  const isAuth = true;
  return (
    <Router>
      <Routes>
        {isAuth
          ? PrivateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element()} />
            ))
          : PublicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element()} />
            ))}
      </Routes>
    </Router>
  );
}

export default App;
