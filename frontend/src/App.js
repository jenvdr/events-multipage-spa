import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import './index.scss';
import Layout from "./components/Layout/Layout";

createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/products' },
])

function App() {
  return (
    <Layout />
  )
}

export default App;
