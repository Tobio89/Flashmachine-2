import { Switch, Route } from "react-router-dom";

import Header from "./ui/Header";
import WordEntry from "./pages/WordEntry";

import style from "./App.module.scss";

function App() {
  return (
    <main className={style.outer}>
      <Header />
      <Switch>
        <Route path="/">
          <WordEntry />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
