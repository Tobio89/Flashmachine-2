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

function WordTabs() {
  const dispatch = useDispatch();
  const flashContent = useSelector((state: State) => state.flashContent);
  const activeWord = useSelector((state: State) => state.activeWord);

  return (
    <div className={style.tabMenu}>
      {flashContent?.map((w) => (
        <Tab
          key={w.word}
          title={w.word}
          setTab={() => dispatch(setActiveWordAction(w))}
          isActive={activeWord === w}
        />
      ))}
    </div>
  );
}

export default WordTabs;
