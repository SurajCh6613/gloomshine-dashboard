// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import Hero from "./components/Hero";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
