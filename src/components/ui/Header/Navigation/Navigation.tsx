import { useHistory, useLocation } from "react-router-dom";

import Button from "../../Button";

import { useFlashcards } from "../../../../hooks";

import styles from "./Navigation.module.scss";

function Navigation() {
  const history = useHistory();
  let location = useLocation();

  const { flashcardList } = useFlashcards();

  function handleBack() {
    if (!location.pathname.endsWith("/")) {
      history.push("/");
    } else {
      return;
    }
  }

  function handleEdit() {
    if (!!flashcardList.length && !location.pathname.endsWith("/editing")) {
      history.push("/editing");
    }
  }

  return (
    <div className={styles.Navigation}>
      <Button className={styles.NavButton} onClick={handleBack}>
        <i className="fas fa-home"></i>
      </Button>
      <Button
        className={styles.NavButton}
        onClick={handleEdit}
        disabled={!flashcardList.length}
      >
        <i className="fas fa-edit"></i>
      </Button>
      <Button
        className={styles.NavButton}
        onClick={() => history.push("/help")}
      >
        <i className="fas fa-info"></i>
      </Button>
    </div>
  );
}

export default Navigation;
