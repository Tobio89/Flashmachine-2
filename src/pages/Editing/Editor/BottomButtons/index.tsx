import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../components/Button";

import { State } from "../../../../config/types";
import { flashToTxt } from "../../../../func";
import { setActiveWordAction } from "../../../../store/actions/actions";

import style from "./BottomButtons.module.scss";

function BottomButtons() {
  const dispatch = useDispatch();
  const activeWord = useSelector((state: State) => state.activeWord);
  const flashContent = useSelector((state: State) => state.flashContent);

  const handleBack = () => {
    if (activeWord && flashContent) {
      const currentIndex = flashContent?.indexOf(activeWord);
      if (currentIndex && currentIndex > 0) {
        dispatch(setActiveWordAction(flashContent[currentIndex - 1]));
      } else {
        dispatch(setActiveWordAction(flashContent[flashContent.length - 1])); // Cycle round
      }
    }
  };

  const handleNext = () => {
    if (activeWord && flashContent) {
      const currentIndex = flashContent?.indexOf(activeWord);
      if (currentIndex + 1 && currentIndex + 1 < flashContent.length) {
        //current+1 because 0 is false, of course...
        dispatch(setActiveWordAction(flashContent[currentIndex + 1]));
      } else {
        dispatch(setActiveWordAction(flashContent[0])); // Cycle round
      }
    }
  };

  const handleMake = () => {
    if (flashContent) {
      const element = document.createElement("a");
      const file = new Blob([flashToTxt(flashContent)], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "flashmachine_anki_flashcards.txt";
      document.body.appendChild(element);
      element.click();
    }
  };

  return (
    <div className={style.bottomButtons}>
      <Button onClick={handleBack}>
        <i className="fas fa-angle-left"></i>
      </Button>
      <Button onClick={handleMake}>Make Cards</Button>
      <Button onClick={handleNext}>
        <i className="fas fa-angle-right"></i>
      </Button>
    </div>
  );
}

export default BottomButtons;
