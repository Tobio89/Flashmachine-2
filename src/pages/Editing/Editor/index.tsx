import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const activeWord = useSelector((state: State) => state.activeWord);
  const flashContent = useSelector((state: State) => state.flashContent);

  const [content, setContent] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);

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
      history.push("/");
    }
  };

  const handleDismissEditing = () => {
    handleCancel();
    setEditing(false);
  };

  // Use ctrl + enter to submit
  const handleQuickSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (activeWord?.meaning) {
      setContent(activeWord.meaning);
    }
  }, [activeWord]);

  useEffect(() => {
    if (
      !flashContent ||
      flashContent.length === 0 ||
      flashContent.length === undefined
    ) {
      history.replace("/");
    }
  }, []); //eslint-disable-line

  function EditingButtons() {
    return (
      <div className={style.buttonBox}>
        <Button styling={style.editButton} onClick={handleCancel}>
          <i className="fas fa-undo"></i>
        </Button>
        <Button styling={style.editButton} onClick={handleSubmit}>
          <i className="far fa-check-square"></i>
        </Button>
      </div>
    );
  }

  function NormalButtons() {
    return (
      <div className={style.buttonBox}>
        <Button styling={style.editButton} onClick={handleDelete}>
          <i className="far fa-trash-alt"></i>
        </Button>
        <Button styling={style.editButton} onClick={() => setEditing(true)}>
          <i className="far fa-edit"></i>
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleQuickSubmit}
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
      <BottomButtons />
    </>
  );
}

export default Editor;
