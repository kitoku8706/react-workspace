import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <div>
      <h1>Basic Example </h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="first" element={<First />} />
            <Route path="second" element={<Second />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
