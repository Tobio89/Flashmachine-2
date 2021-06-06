import Editor from "./Editor";
import WordTabs from "./WordTabs";

import style from "./CardEditing.module.scss";

function CardEditing() {
  return (
    <>
      <WordTabs />
      <Editor />
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
