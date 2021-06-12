import { Switch, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./config/react-query";

import Header from "./ui/Header";

import Main from "./pages/Main";
import About from "./pages/About";
import Editing from "./pages/Editing";

import style from "./App.module.scss";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={style.outer}>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/editing">
            <Editing />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </main>
    </QueryClientProvider>
  );
}

export default App;
