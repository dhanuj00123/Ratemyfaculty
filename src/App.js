import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/home";
import explore from "./components/explore";
import profile from "./components/profile";
// import Navbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/explore" component={explore} />
        <Route path="/profile" component={profile} />
      </Switch>
    </Router>
  );
}

export default App;
