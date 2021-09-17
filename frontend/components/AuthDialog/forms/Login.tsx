import React from "react";
import { Button, TextField } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormSchema } from "../../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "../../FormField";

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  console.log(form.formState.errors);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />

          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
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
