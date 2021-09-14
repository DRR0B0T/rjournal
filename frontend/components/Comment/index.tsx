import React from "react";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";

import styles from "./Comment.module.scss";

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/preview/600/-/format/webp/"
          alt="Avatar"
        />
        <b>Master Yoda</b>
        <span>5 часов</span>
      </div>
      <Typography className={styles.text}>
        Ну какой красавчик Данил Медведев - исторически сделал Джоковича и
        выйграл US Open! Победу отпраздновал падением из Fifa - если зажать в
        этой игре L2 и "влево", персонаж вот так смешно валится на бок. Отличный
        подарок жене на трехлетнюю годовщину свадьбы, которая тоже была вчера.
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
