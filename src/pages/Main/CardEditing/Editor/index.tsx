import DefinitionBlock from "./DefinitionBlock";

import { DefinitionPack } from "../../../../config/types";

import style from "./Editor.module.scss";

const includeHanja = true;

type Props = {
  activeWord: DefinitionPack;
};

function Editor({ activeWord }: Props) {
  return (
    <div className={style.cardEditor}>
      <div className={style.title}>{activeWord.queryWord}</div>
      {activeWord.results?.map((d) => (
        <DefinitionBlock definition={d} includeHanja={includeHanja} />
      ))}
    </div>
  );
}

export default Editor;
