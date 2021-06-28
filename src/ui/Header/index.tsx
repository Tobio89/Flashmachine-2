import { useLocation, useHistory } from "react-router-dom";

import { auth } from "../../components/FirebaseProvider/fireinst";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

import Button from "../../components/Button";

import style from "./Header.module.scss";

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider);
};

function Header() {
  const loc = useLocation();
  const history = useHistory();

  const [user] = useAuthState(auth);

  const pushToUserPage = () => {
    if (loc.pathname !== "/user") {
      history.push("/user");
    } else {
      history.push("/");
    }
  };

  return (
    <header className={style.header}>
      <span className={style.text}>Flashmachine</span>
      {user ? (
        <Button styling={style.link} onClick={pushToUserPage}>
          <i className="fas fa-user"></i>
        </Button>
      ) : (
        <Button styling={style.link} onClick={signInWithGoogle}>
          <i className="fas fa-user-plus"></i>
        </Button>
      )}

      {loc.pathname === "/about" ? (
        <Button styling={style.link} onClick={() => history.goBack()}>
          <i className="fas fa-reply"></i>
        </Button>
      ) : (
        <Button styling={style.link} onClick={() => history.push("/about")}>
          <i className="fas fa-info"></i>
        </Button>
      )}
    </header>
  );
}

export default Header;
