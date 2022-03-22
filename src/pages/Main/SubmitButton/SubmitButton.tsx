import React from "react";

import Button from "../../../components/ui/Button";
import { useGetTranslations, useWordList } from "../../../hooks";

import styles from "./SubmitButton.module.scss";

function SubmitButton() {
  const { wordCount } = useWordList();
  const { requestWords, isLoading } = useGetTranslations();

  const submitWordRequest = () => {
    if (wordCount) {
      requestWords();
    }
  };

  return (
    <Button className={styles.SubmitButton} onClick={submitWordRequest}>
      {isLoading ? "Fetching..." : "Submit Words"}
    </Button>
  );
}

export default SubmitButton;
