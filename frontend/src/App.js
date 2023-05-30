import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import './index.scss';
import Layout from "./components/Layout/Layout";

createBrowserRouter([
  { path: '/', element: <HomePage />},
  { path: '/products' },
])

function App() {
  return (
    <Layout />
  )
}

export default App;
