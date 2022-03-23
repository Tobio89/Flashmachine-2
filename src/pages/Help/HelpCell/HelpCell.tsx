import React from "react";

import styles from "./HelpCell.module.scss";

interface Props {
  helpElement: { title: string; content: JSX.Element[] };
}

function HelpCell({ helpElement }: Props) {
  return (
    <details className={styles.HelpCell}>
      <summary>{helpElement.title}</summary>
      {helpElement.content.map((p) => p)}
    </details>
  );
}

export default HelpCell;
