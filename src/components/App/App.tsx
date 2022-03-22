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
    <BrowserRouter>
      <main className={styles.App}>
        <Header />
        <div className={styles.Container}>
          <Switch>
            <Route path="/editing">
              <Editing />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
