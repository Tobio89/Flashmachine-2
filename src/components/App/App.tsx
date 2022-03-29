import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Main, Editing, Help } from "../../pages";

import Header from "../ui/Header";

import { useHerokuWakeUp } from "../../hooks";

import styles from "./App.module.scss";

function App() {
  const { isAwake } = useHerokuWakeUp();

  if (isAwake) {
    console.log("Backend service is online");
  }

  return (
    <BrowserRouter>
      <main className={styles.App}>
        <div className={styles.Outer}>
          <Header />
          <div className={styles.Container}>
            <Switch>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/editing">
                <Editing />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
