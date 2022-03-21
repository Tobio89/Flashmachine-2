import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Main, Editing } from "../../pages";

import Header from "../ui/Header";

import { useHerokuWakeUp } from "../../hooks";

import styles from "./App.module.scss";

function App() {
  const { isAwake } = useHerokuWakeUp();
  if (isAwake) {
    console.log("Backend service is online");
  }

  return (
    <main className={styles.App}>
      <Header />
      <div className={styles.Container}>
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
      </div>
    </main>
  );
}

export default App;
