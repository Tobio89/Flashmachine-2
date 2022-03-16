import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main, Editing } from "../../pages";
import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/editing">
            <Editing />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
