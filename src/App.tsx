import { useRoutes } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./routes/main";

function App() {
  const app = useRoutes(mainRoutes);
  return app;
}

export default App;
