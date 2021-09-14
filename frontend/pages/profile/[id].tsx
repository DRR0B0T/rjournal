import React from "react";
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from "@material-ui/icons";
import Link from "next/link";
import {
  Avatar,
  Button,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

import { MainLayout } from "../../layouts/MainLayout";
import { Post } from "../../components/Post";

export default function Profile() {
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="pl-20 pr-20 pt-20 mb-30">
        <div className="d-flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/format/webp/"
            />
            <Typography
              style={{ fontWeight: "bold" }}
              className="mt-10"
              variant="h4"
            >
              Dark Knight
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained"
              >
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className="d-flex mb-10 mt-10">
          <Typography
            style={{ fontWeight: "bold", color: "#35AB66" }}
            className="mr-15"
          >
            +250
          </Typography>
          <Typography>3 подписчика</Typography>
        </div>
        <Typography>На проекте с 20 июня 2018</Typography>
        <Tabs>
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>

      <div className="d-flex align-start">
        <div className="mr-20 flex">
          <Post />
        </div>
        <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
          <b>Подписчики</b>
          <div>
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/format/webp/"
            />
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/format/webp/"
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
}
