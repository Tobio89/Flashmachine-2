import HelpCell from "./HelpCell";

import styles from "./Help.module.scss";

import { data } from "./helpData";

function Help() {
  return (
    <div className={styles.Help}>
      {data.map((help) => (
        <HelpCell helpElement={help} />
      ))}
    </div>
  );
}

export default Help;
