import React from "react";
import { Button } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormSchema } from "../../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "../../FormField";
import { LoginDto } from "../../../utils/API/types";
import { UserApi } from "../../../utils/API";
import { setCookie } from "nookies";
import Alert from "@material-ui/lab/Alert";
import { useAppDispatch } from "../../../redux/hooks";
import { setUserData } from "../../../redux/slices/user";

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, "authToken", data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage("");
    } catch (err) {
      console.warn("Ошибка при регистрации", err);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />

          {errorMessage && (
            <Alert className="mb-20" severity="error">
              {errorMessage}
            </Alert>
          )}

          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type="submit"
              color="primary"
              variant="contained"
            >
              Войти
            </Button>
            <Button
              onClick={onOpenRegister}
              className="ml-10"
              color="primary"
              variant="text"
            >
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
