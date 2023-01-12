import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InGame from "./components/InGame";
import WaitingPage from "./components/WaitingPage"
function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <WaitingPage />
            </Route>
            <Route path="/ingame">
              <InGame />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
