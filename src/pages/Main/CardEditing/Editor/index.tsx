import { useEffect, useState } from "react";

import Button from "../../../../components/Button";

import { flashPack } from "../../../../config/types";

import style from "./Editor.module.scss";

type Props = {
  activeWord: flashPack;
  deleteWord: () => void;
  updateWord: (word: string, newMeaning: string) => void;
};

// N.B textarea has its own stupid default style, that's why style={{}} is there :|

function Editor({ activeWord, deleteWord, updateWord }: Props) {
  const [content, setContent] = useState<flashPack>(activeWord);
  const [localContent, setLocalContent] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);

  const handleEditing = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (editing) {
      setLocalContent(e.target.value);
    }
  };

  const toggleEditing = () => {
    if (editing) {
      setLocalContent("");
      setEditing(false);
    } else {
      setLocalContent(activeWord.meaning);
      setEditing(true);
    }
  };

  const handleSubmit = () => {
    updateWord(content.word, localContent);
  };

  useEffect(() => {
    setContent(activeWord);
    setEditing(false);
  }, [activeWord]);

  return (
    <div className={style.cardEditor}>
      <div className={style.title}>
        {content.word}
        <Button styling={style.button} onClick={deleteWord}>
          X
        </Button>
        <div>
          {editing ? (
            <Button
              styling={style.editButton}
              onClick={() => {
                handleSubmit();
                setEditing(false);
              }}
            >
              Done
            </Button>
          ) : (
            <Button styling={style.editButton} onClick={() => toggleEditing()}>
              Edit
            </Button>
          )}
        </div>
      </div>
      {editing ? (
        <textarea
          className={style.editBox}
          value={localContent}
          onChange={(e) => handleEditing(e)}
          style={{}}
        />
      ) : (
        <textarea
          className={style.editBox}
          value={activeWord.meaning}
          style={{}}
          readOnly
        />
      )}
    </div>
  );
}

export default Editor;
