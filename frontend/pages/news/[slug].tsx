import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { FullPost } from "../../components/FullPost";
import { Comment } from "../../components/Comment";
import { Paper, Tab, Tabs, Typography, Divider } from "@material-ui/core";

export default function Home() {
  return (
    <MainLayout>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant="h6" className="mb-20">
          50 комментариев
        </Typography>
        <Tabs>
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-20" />
        <Comment />
        <Comment />
        <Comment />
      </Paper>
    </MainLayout>
  );
}
