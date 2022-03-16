import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
