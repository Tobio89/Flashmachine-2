import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button";
import BottomButtons from "./BottomButtons";

import { FlashPack, State } from "../../../config/types";
import {
  setActiveWordAction,
  setFlashContentsAction,
} from "../../../store/actions/actions";
import WordTabs from "./WordTabs";

import style from "./Editor.module.scss";

// N.B textarea has its own stupid default style, that's why style={{}} is there :|

function Editor() {
  const dispatch = useDispatch();
  const activeWord = useSelector((state: State) => state.activeWord);
  const flashContent = useSelector((state: State) => state.flashContent);

  const [content, setContent] = useState<string>("");

  const [editing, setEditing] = useState<boolean>(false);

  console.log("confirm receive active word: ", activeWord);

  const handleSubmit = () => {
    if (activeWord) {
      dispatch(setActiveWordAction({ ...activeWord, meaning: content }));
      const newFlashContent = flashContent?.map((f: FlashPack) => {
        if (f.word === activeWord.word) {
          return {
            ...activeWord,
            meaning: content,
          };
        }
        return f;
      });
      if (newFlashContent) {
        dispatch(setFlashContentsAction(newFlashContent));
      }
      setEditing(false);
    }

    /*TODO:
    This function will look in flashContents for the same existing word, and then replace that entry with activeWord
    */
    return;
  };
  const handleCancel = () => {
    if (activeWord) {
      setContent(activeWord?.meaning);
    }
    setEditing(false);
  };
  const handleDelete = () => {
    const newContent = flashContent?.filter(
      (f: FlashPack) => f.word !== activeWord?.word
    );
    if (newContent && newContent.length > 0) {
      dispatch(setFlashContentsAction(newContent));
      dispatch(setActiveWordAction(newContent[0]));
    } else {
      dispatch(setFlashContentsAction(null));
      dispatch(setActiveWordAction(null));
    }
  };

  const handleDismissEditing = () => {
    handleCancel();
    setEditing(false);
  };

  useEffect(() => {
    if (activeWord?.meaning) {
      setContent(activeWord.meaning);
    }
  }, [activeWord]);

  function EditingButtons() {
    return (
      <div className={style.buttonBox}>
        <Button styling={style.editButton} onClick={handleCancel}>
          Undo
        </Button>
        <Button styling={style.editButton} onClick={handleSubmit}>
          Done
        </Button>
      </div>
    );
  }

  function NormalButtons() {
    return (
      <div className={style.buttonBox}>
        <Button styling={style.editButton} onClick={handleDelete}>
          Del
        </Button>
        <Button styling={style.editButton} onClick={() => setEditing(true)}>
          Edit
        </Button>
      </div>
    );
  }

  return (
    <>
      <WordTabs stopEditing={handleDismissEditing} />
      <div className={style.cardEditor}>
        <div className={style.title}>
          {activeWord?.word}
          {editing ? <EditingButtons /> : <NormalButtons />}
        </div>
        {editing ? (
          <textarea
            className={`${style.editBox} ${style.editing}`}
            value={content} // This may be problematic - it could mean it won't visibly update
            onChange={(e) => setContent(e.target.value)}
            style={{}}
          />
        ) : (
          <textarea
            className={style.editBox}
            value={content}
            style={{}}
            readOnly
          />
        )}
      </div>
     <BottomButtons dismissEditing={handleDismissEditing}/>
    </>
  );
}

export default Editor;
