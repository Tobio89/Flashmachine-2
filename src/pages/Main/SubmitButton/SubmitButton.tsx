import Button from "../../../components/ui/Button";
import Loader from "../../../components/ui/Loader";

import styles from "./SubmitButton.module.scss";

interface Props {
  submitWordRequest: () => void;
  isLoadingTranslations: boolean;
  isWordlistEmpty: boolean;
}

function SubmitButton({
  submitWordRequest,
  isLoadingTranslations,
  isWordlistEmpty,
}: Props) {
  return (
    <Button
      className={styles.SubmitButton}
      onClick={submitWordRequest}
      disabled={isLoadingTranslations || isWordlistEmpty}
    >
      {isLoadingTranslations ? <Loader /> : <span>Submit Word List</span>}
    </Button>
  );
}

export default SubmitButton;
