import { useState, useEffect } from "react";
import { Definition } from "../../../../../config/types";

import style from "./DefinitionBlock.module.scss";

type Props = {
  definition: Definition;
  includeHanja: boolean;
};

function Button({
  handler,
  label,
}: {
  handler: (_: any) => void;
  label: string;
}) {
  return (
    <button className={style.delete} onClick={() => handler(false)}>
      {label}
    </button>
  );
}

function DefinitionBlock({ definition, includeHanja }: Props) {
  const [contents, setContents] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    if (includeHanja && definition.hanja) {
      setContents(`${definition.hanja}\n${definition.definition}`);
    } else {
      setContents(definition.definition);
    }
  }, [definition, includeHanja]);

  return (
    <div className={style.definitionBlock}>
      <div className={style.def}>
        <span className={style.content} onClick={() => setEditing(true)}>
          {editing ? <textarea value={contents} /> : contents}
        </span>
        {!editing ? (
          <Button label="X" handler={() => console.log("delete")} />
        ) : (
          <Button label="O" handler={setEditing} />
        )}
      </div>
    </div>
  );
}

export default DefinitionBlock;
