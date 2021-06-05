import { useEffect, useState } from "react";

import Editor from "./Editor";
import WordTabs from "./WordTabs";

import { flashPack } from "../../../config/types";

import style from "./CardEditing.module.scss";

type Props = {
  definitions: flashPack[];
  setFlashContents: (_: flashPack[]) => void;
};

function CardEditing({ definitions, setFlashContents }: Props) {
  const [content, setContent] = useState<flashPack[]>(definitions);
  const [activeWord, setActiveWord] = useState<flashPack>(content[0]);

  const setTab = (word: string) => {
    const a = definitions.find((def) => def.word === word);
    if (a) {
      setActiveWord(a);
    }
  };

  const deleteWord = (wordToDelete: string) => {
    console.log("Request delete :", wordToDelete);
    setFlashContents(
      definitions.filter((d: flashPack) => d.word !== wordToDelete)
    );
  };

  const updateWord = (wordToUpdate: string, newMeaning: string) => {
    console.log("Updating word: ", wordToUpdate);
    const updated = definitions.map((d: flashPack) => {
      if (d.word === wordToUpdate) {
        return { ...d, meaning: newMeaning };
      }
      return d;
    });
    setFlashContents(updated);
  };

  //TESTING
  useEffect(() => {
    if (definitions) {
      setContent(definitions);
      const updatedActiveWord = definitions.filter(
        (d: flashPack) => d.word === activeWord.word
      );
      if (updatedActiveWord.length === 0) {
        setActiveWord(definitions[0]);
      } else {
        setActiveWord(updatedActiveWord[0]);
      }
    }
  }, [definitions, activeWord]);

  return (
    <>
      <WordTabs
        words={definitions?.map((w: flashPack) => w.word)}
        setTab={setTab}
        activeTab={activeWord?.word}
      />
      <Editor
        activeWord={activeWord}
        deleteWord={() => deleteWord(activeWord.word)}
        updateWord={updateWord}
      />
      <div className={style.buttons}>
        <button>
          <i className="fas fa-angle-left"></i>
        </button>
        <button>Make Cards</button>
        <button>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}

export default CardEditing;
