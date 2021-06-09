import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./Header.module.scss";

function Header() {
  const loc = useLocation();
  console.log(loc.pathname);
  return (
    <header className={style.header}>
      <span className={style.text}>Flashmachine</span>
      {loc.pathname === "/about" ? (
        <Link className={style.link} to={"/"}>
          <i className="fas fa-reply"></i>
        </Link>
      ) : (
        <Link className={style.link} to={"/about"}>
          <i className="fas fa-info"></i>
        </Link>
      )}
    </header>
  );
}

export default Header;
