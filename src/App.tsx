import { Switch, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./config/react-query";

import Header from "./ui/Header";
import Main from "./pages/Main";

import style from "./App.module.scss";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={style.outer}>
        <Header />
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </main>
    </QueryClientProvider>
  );
}

export default App;
