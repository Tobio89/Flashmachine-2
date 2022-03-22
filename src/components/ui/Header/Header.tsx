import Navigation from "./Navigation";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <h1>Flashmachine</h1>
      <Navigation />
    </header>
  );
}

export default Header;
