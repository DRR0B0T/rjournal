import React from "react";
import { Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { RegisterFormSchema } from "../../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "../../FormField";

interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  console.log(form.formState.errors);

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullname" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              onClick={onOpenRegister}
              type="submit"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={onOpenLogin}
              className="ml-10"
              color="primary"
              variant="text"
            >
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
