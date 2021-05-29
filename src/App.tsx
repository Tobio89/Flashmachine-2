import { Switch, Route } from "react-router-dom";

import Header from "./ui/Header";
import Main from "./pages/Main";

import style from "./App.module.scss";

function App() {
  return (
    <main className={style.outer}>
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
