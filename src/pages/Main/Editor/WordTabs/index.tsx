import { useSelector, useDispatch } from "react-redux";

import { DefinitionPack, FlashPack, State } from "../../../../config/types";
import {
  setActiveWordAction,
  setDefinitionsAction,
  setFlashContentsAction,
} from "../../../../store/actions/actions";

import style from "./WordTabs.module.scss";

type TabProps = {
  title: string;
  setTab: (_: string) => void;
  isActive: boolean;
};

function Tab({ title, setTab, isActive }: TabProps) {
  return (
    <button
      className={isActive ? style.activeTab : style.tab}
      onClick={() => setTab(title)}
    >
      {title}
    </button>
  );
}

function WordTabs({ stopEditing }: { stopEditing: () => void }) {
  const dispatch = useDispatch();
  const flashContent = useSelector((state: State) => state.flashContent);
  const activeWord = useSelector((state: State) => state.activeWord);

  const setTab = (w: FlashPack) => {
    dispatch(setActiveWordAction(w));
    stopEditing();
  };

  return (
    <div className={style.tabMenu}>
      {flashContent?.map((w) => (
        <Tab
          key={w.word}
          title={w.word}
          setTab={() => setTab(w)}
          isActive={activeWord?.word === w.word}
        />
      ))}
    </div>
  );
}

export default WordTabs;
