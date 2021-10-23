
import "./App.css";
import { BrowsweRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/home";
import explore from "./components/explore";
import profile from "./components/profile";
import navbar from "./components/navbar";
function App() {
  return (
    <Route>
      <navbar />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/explore" component={explore} />
        <Route path="/profile" component={profile} />
      </Switch>
    </Route>
  );
}

export default App;
