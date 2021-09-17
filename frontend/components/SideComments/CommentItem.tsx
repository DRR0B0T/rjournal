import React from "react";
import styles from "./SideComments.module.scss";
import Link from "next/link";

interface CommentItemProps {
  user: {
    id: number;
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
        <img
          alt="User avatar"
          src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/preview/600/-/format/webp/"
        />
        <Link href={`/profile/${user.id}`}>
          <a>
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <Link href={`/news/${user.id}`}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};
