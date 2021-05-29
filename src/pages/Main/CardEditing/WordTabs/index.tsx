import style from "./WordTabs.module.scss";

type MenuProps = {
  words: string[] | undefined | null;
  setTab: (_: string) => void;
  activeTab: string;
};

type TabProps = {
  title: string;
  setTab: (_: string) => void;
  activeTab: string;
};

function Tab({ title, setTab, activeTab }: TabProps) {
  return (
    <button
      className={activeTab === title ? style.activeTab : style.tab}
      onClick={() => setTab(title)}
    >
      {title}
    </button>
  );
}

function WordTabs({ words, setTab, activeTab }: MenuProps) {
  return (
    <div className={style.tabMenu}>
      {words?.map((w) => (
        <Tab key={w} title={w} setTab={() => setTab(w)} activeTab={activeTab} />
      ))}
    </div>
  );
}

export default WordTabs;
