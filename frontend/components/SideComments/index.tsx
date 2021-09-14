import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from "./SideComments.module.scss";

const items = [
  {
    user: {
      fullname: "Федор Петров",
    },
    text: "Теперь я знаю как развить силу воли",
    post: {
      title: "Как вы этого добились?",
    },
  },
  {
    user: {
      fullname: "Федор Петров",
    },
    text: "Теперь я знаю как развить силу воли",
    post: {
      title: "Как вы этого добились?",
    },
  },
  {
    user: {
      fullname: "Федор Петров",
    },
    text: "Теперь я знаю как развить силу воли",
    post: {
      title: "Как вы этого добились?",
    },
  },
];

interface CommentItemProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/preview/600/-/format/webp/" />
        <a href="#">
          <b>{user.fullname}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {items.map((obj) => (
        <CommentItem {...obj} />
      ))}
    </div>
  );
};
