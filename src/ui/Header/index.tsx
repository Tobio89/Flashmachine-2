import { useLocation, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import style from "./Header.module.scss";

function Header() {
  const loc = useLocation();
  const history = useHistory();
  console.log(loc.pathname);
  return (
    <header className={style.header}>
      <span className={style.text}>Flashmachine</span>
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
