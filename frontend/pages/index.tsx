import React from "react";
import { Post } from "../components/Post";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}
