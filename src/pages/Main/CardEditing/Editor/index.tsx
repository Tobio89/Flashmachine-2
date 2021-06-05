import DefinitionBlock from "./DefinitionBlock";

import { flashPack } from "../../../../config/types";

import style from "./Editor.module.scss";

type Props = {
  activeWord: flashPack;
};

// N.B textarea has its own stupid default style, that's why style={{}} is there :|

function Editor({ activeWord }: Props) {
  return (
    <div className={style.cardEditor}>
      <div className={style.title}>{activeWord.word}</div>
      <textarea
        className={style.editBox}
        value={activeWord.meaning}
        style={{}}
      />
    </div>
  );
}

export default Editor;
