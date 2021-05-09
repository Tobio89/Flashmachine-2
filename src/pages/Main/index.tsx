import { useState } from "react";
import useWordTransforms from "../../hooks/useWordTransforms";

import style from "./Main.module.scss";

function Main() {
  const [textInput, setTextInput] = useState<string>("");

  const { canSubmit } = useWordTransforms();

  return (
    <section className={style.main}>
      <textarea
        rows={30}
        placeholder="Add up to 30 words!"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button onClick={() => console.log(canSubmit(textInput))}>Submit</button>
    </section>
  );
}

export default Main;
