import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../components/Button";

import { FlashPack, State } from "../../../../config/types";

import style from "./Editor.module.scss";

// N.B textarea has its own stupid default style, that's why style={{}} is there :|

function Editor() {
  const dispatch = useDispatch();

  const activeWord = useSelector((state: State) => state.activeWord);
  const [editing, setEditing] = useState<boolean>(false);

  return (
    <div className={style.cardEditor}>
      <div className={style.title}>
        {activeWord?.word}
        <Button styling={style.button}>X</Button>
        <div>
          {editing ? (
            <Button styling={style.editButton}>Done</Button>
          ) : (
            <Button styling={style.editButton}>Edit</Button>
          )}
        </div>
      </div>
      {editing ? (
        <textarea
          className={style.editBox}
          value={activeWord?.meaning} // This may be problematic - it could mean it won't visibly update
          readOnly
          style={{}}
        />
      ) : (
        <textarea
          className={style.editBox}
          value={activeWord?.meaning}
          style={{}}
          readOnly
        />
      )}
    </div>
  );
}

export default Editor;
