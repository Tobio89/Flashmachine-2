import { useHistory, useLocation } from "react-router-dom";

import Button from "../../Button";

import styles from "./Navigation.module.scss";

function Navigation() {
  const history = useHistory();
  let location = useLocation();

  function handleBack() {
    if (!location.pathname.endsWith("/")) {
      history.goBack();
    } else {
      return;
    }
  }

  return (
    <div className={styles.Navigation}>
      <Button className={styles.NavButton} onClick={handleBack}>
        <i className="fas fa-reply"></i>
      </Button>
      <Button
        className={styles.NavButton}
        onClick={() => history.push("/about")}
      >
        <i className="fas fa-info"></i>
      </Button>
    </div>
  );
}

export default Navigation;
