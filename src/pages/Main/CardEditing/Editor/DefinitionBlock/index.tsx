import { useState, useEffect } from "react";
import { Definition } from "../../../../../config/types";

import style from "./DefinitionBlock.module.scss";

type Props = {
  definition: Definition;
  includeHanja: boolean;
};

function DefinitionBlock({ definition, includeHanja }: Props) {
  const [contents, setContents] = useState<string>("");

  useEffect(() => {
    if (includeHanja && definition.hanja) {
      setContents(`${definition.hanja}\n${definition.definition}`);
    } else {
      setContents(definition.definition);
    }
  }, [definition, includeHanja]);

  return (
    <div className={style.definitionBlock}>
      <div className={style.def}>{contents}</div>
    </div>
  );
}

export default DefinitionBlock;
