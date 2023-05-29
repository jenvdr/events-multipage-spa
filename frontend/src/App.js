import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";

createBrowserRouter([
  { path: '/', element: <HomePage />},
  { path: '/products' },
])

function App() {
  return <div></div>;
}

export default App;
