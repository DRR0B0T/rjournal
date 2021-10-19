import React from "react";
import { setCookie } from "nookies";
import { Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { RegisterFormSchema } from "../../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "../../FormField";
import { UserApi } from "../../../utils/API";
import { CreateUserDto } from "../../../utils/API/types";

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

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (e) {
      alert("Error registration");
      console.warn("Ошибка при регистрации", e);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
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
