import Navigation from "./Navigation";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.FullHeader}>Flashmachine</h1>
      <h1 className={styles.SmallHeader}>Fm.</h1>
      <Navigation />
    </header>
  );
}

export default Header;
