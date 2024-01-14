import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <Routes>
        {PublicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element()} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
