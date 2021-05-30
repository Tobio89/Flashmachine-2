import { DefinitionPack } from "../../../../config/types";

import style from "./Editor.module.scss";

type Props = {
  activeWord: DefinitionPack;
};

function Editor({ activeWord }: Props) {
  return (
    <div className={style.cardEditor}>
      <div className={style.title}>{activeWord.queryWord}</div>
      {activeWord.results?.map((d) => (
        <div className={style.definition}>{d.definition}</div>
      ))}
    </div>
  );
}

export default Editor;
