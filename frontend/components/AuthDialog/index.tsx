import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import styles from "./AuthDialog.module.scss";
import { MainForm } from "./forms/Main";
import { LoginForm } from "./forms/Login";
import { RegisterForm } from "./forms/Register";

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">(
    "main"
  );

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === "main" ? (
                "Вход в RJ"
              ) : (
                <p
                  onClick={() => setFormType("main")}
                  className={styles.backArrow}
                >
                  <ArrowBackIosIcon /> К авторизации
                </p>
              )}
            </Typography>
            {formType === "main" && (
              <MainForm onOpenLogin={() => setFormType("login")} />
            )}

            {formType === "login" && (
              <LoginForm onOpenRegister={() => setFormType("register")} />
            )}

            {formType === "register" && (
              <RegisterForm
                onOpenRegister={() => setFormType("register")}
                onOpenLogin={() => setFormType("login")}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
