import React from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/TextsmsOutlined";
import UserAddIcon from "@material-ui/icons/PersonAddOutlined";

import styles from "./FullPost.module.scss";
import { PostActions } from "../PostActions";

export const FullPost: React.FC = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{ margin: "0 auto", width: 680 }}>
        <Typography variant="h4" className={styles.title}>
          В Красноярске детям провели «открытый урок» на пустыре, где власти
          обещали построить школу
        </Typography>
        <div>
          <Typography>
            Родители школьников из красноярского микрорайона «Образцово» провели
            для детей «открытый урок» в поле, на месте которого власти обещали
            построить школу, сообщает телеграм-канал «Борус».
          </Typography>
          <Typography>
            Красноярцы расставили на пустыре парты и рассадили учеников, которые
            пришли в школьной форме, взяв с собой рюкзаки, учебники и тетради.
            Родители отметили, что акция прошла в субботу, поэтому дети не
            пропустили настоящие занятия.
          </Typography>
          <div style={{ width: 250, marginLeft: -250 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <img
                src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/preview/600/-/format/webp/"
                alt="Avatar"
              />
              <b>Donnie Darko</b>
              <span>+1650</span>
            </div>
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
