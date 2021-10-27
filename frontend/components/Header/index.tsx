import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  AccountCircleOutlined as UserIcon,
  NotificationsNoneOutlined as NotificationIcon,
} from "@material-ui/icons";

import styles from "./Header.module.scss";
import { Avatar, Button, IconButton, Paper } from "@material-ui/core";
import Link from "next/link";
import { AuthDialog } from "../AuthDialog";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [visible, setVisible] = React.useState(false);

  const openAuthDialog = () => {
    setVisible(true);
  };

  const closeAuthDialog = () => {
    setVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a href="#">
            <img
              height={35}
              className="mr-20"
              src="/static/img/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>

        <div>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {userData ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remi Sharp"
                src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/preview/600/-/format/webp/"
              />
              <ArrowBackIcon />
            </a>
          </Link>
        ) : (
          <div onClick={openAuthDialog} className={styles.loginButton}>
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={visible} />
    </Paper>
  );
};
