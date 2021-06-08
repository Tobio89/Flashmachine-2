import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../components/Button";

import { State } from "../../../../config/types";
import { setActiveWordAction } from "../../../../store/actions/actions";

import style from "./BottomButtons.module.scss";

function BottomButtons({ dismissEditing }: { dismissEditing: () => void }) {
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
      console.log(currentIndex, flashContent.length);
      if (currentIndex + 1 && currentIndex + 1 < flashContent.length) {
        //current+1 because 0 is false, of course...
        dispatch(setActiveWordAction(flashContent[currentIndex + 1]));
      } else {
        dispatch(setActiveWordAction(flashContent[0])); // Cycle round
      }
    }
  };

  return (
    <div className={style.bottomButtons}>
      <Button onClick={handleBack}>
        <i className="fas fa-angle-left"></i>
      </Button>
      <Button>Make Cards</Button>
      <Button onClick={handleNext}>
        <i className="fas fa-angle-right"></i>
      </Button>
    </div>
  );
}

export default BottomButtons;
