import { DefinitionPack } from "../../../../config/types";

import style from "./CardEditor.module.scss";

type Props = {
  activeWord: DefinitionPack;
};

function CardEditor({ activeWord }: Props) {
  return <div className={style.cardEditor}>{activeWord.queryWord}</div>;
}

export default CardEditor;
