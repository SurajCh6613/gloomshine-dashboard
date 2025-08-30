// App.jsx
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="flex  bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
