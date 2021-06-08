import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../components/Button";

import { State } from "../../../../config/types";

import style from "./BottomButtons.module.scss";

function BottomButtons({dismissEditing}: {dismissEditing: ()=>void;}) {

  const dispatch = useDispatch();
  const activeWord = useSelector((state: State) => state.activeWord);
  const flashContent = useSelector((state: State) => state.flashContent);

  const handleBack = () => {

    // currentIndex = 

  }

  return (
    <div className={style.bottomButtons}>
      <Button>
        <i className="fas fa-angle-left"></i>
      </Button>
      <Button>Make Cards</Button>
      <Button>
        <i className="fas fa-angle-right"></i>
      </Button>
    </div>
  );
}

export default BottomButtons;
