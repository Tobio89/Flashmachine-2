import { useEffect, useCallback } from "react";

import Button from "../../../components/ui/Button";
import Loader from "../../../components/ui/Loader";
import { useGetTranslations, useWordList } from "../../../hooks";

import styles from "./SubmitButton.module.scss";

function SubmitButton() {
  const { wordCount } = useWordList();
  const { requestWords, isLoading } = useGetTranslations();

  const submitWordRequest = useCallback(() => {
    if (!isLoading && !!wordCount) {
      requestWords();
    }
  }, [wordCount, requestWords, isLoading]);

  const handleCtrlEnterSubmission = useCallback(
    (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === "Enter") {
        submitWordRequest();
      }
    },
    [submitWordRequest]
  );

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      handleCtrlEnterSubmission(e);
    });
    return () => {
      window.removeEventListener("keypress", (e) => {
        handleCtrlEnterSubmission(e);
      });
    };
  }, [handleCtrlEnterSubmission]);

  return (
    <Button
      className={styles.SubmitButton}
      onClick={submitWordRequest}
      disabled={isLoading || !wordCount}
    >
      {isLoading ? <Loader /> : <span>Submit Word List</span>}
    </Button>
  );
}

export default SubmitButton;
