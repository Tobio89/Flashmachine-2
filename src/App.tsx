import {Switch, Route} from "react-router-dom";

import Main from "./pages/Main";

import style from "./App.module.scss"
import Header from "./components/Header";




function App() {
  return (
    <main className={style.main}>
      <Header/>
      <Switch>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
