import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";

import "./App.css";
import { userStore } from "./store";

function App() {
  const { auth } = userStore();
  return (
    <Router>
      <Routes>
        {auth
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
