import React from "react";
import styles from "./Keyboard.module.css";
import Editor from "../editor";
const Keyboard = () => {
  return (
    <div className={styles.kbdframe}>
      <Editor />
    </div>
  );
};

export default Keyboard;
