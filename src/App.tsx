import { Switch, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./config/react-query";

import Header from "./ui/Header";
import Main from "./pages/Main";

import style from "./App.module.scss";
import About from "./pages/About";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={style.outer}>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
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
