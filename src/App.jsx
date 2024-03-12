import "./App.css";
import Home from "../Components/Home";
import { Router, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
};

export default App;
