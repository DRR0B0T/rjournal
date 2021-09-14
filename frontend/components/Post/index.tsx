import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

import styles from "./Post.module.scss";
import { PostActions } from "../PostActions";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test-123">
          <a>Кот прилёг отдохнуть в английском парке миниатюр</a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        Пока одни не смогли соотнести размеры животного и окружения
      </Typography>
      <Image
        src="https://leonardo.osnova.io/33b1516d-caa0-54dd-b35b-404ead6aba53/-/preview/600/-/format/webp/"
        height={500}
        width={600}
      />
      <PostActions />
    </Paper>
  );
};
