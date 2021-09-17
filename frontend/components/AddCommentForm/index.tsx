import React from "react";
import Input from "@material-ui/core/Input";
import styles from "./AddCommentForm.module.scss";
import { Button } from "@material-ui/core";

interface AddCommentFormProps {}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState("");

  const onAddComment = () => {
    setClicked(false);
    setText("");
  };

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1} // если кнопка нажата то 5 рядов иначе 1
        multiline
        classes={{ root: styles.fieldRoot }}
        fullWidth
        placeholder="Написать комментарий"
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};
