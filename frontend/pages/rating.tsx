import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@material-ui/core";

import { MainLayout } from "../layouts/MainLayout";
import { FollowButton } from "../components/FollowButton";
import React from "react";

export default function Rating() {
  return (
    <MainLayout>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontSize: 30, marginBottom: 6 }}
        >
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых
          десяти сообществ из рейтинга по итогам месяца бесплатно получают
          Plus-аккаунт на месяц.
        </Typography>
        <Tabs
          className="mt-10"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>

      <Paper>
        <Table aria-label="обычная таблица">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>Максим Даун
              </TableCell>
              <TableCell align="right">750</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
}
