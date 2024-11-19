import { yupResolver } from "@hookform/resolvers/yup";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { RegisterFormStyled } from "./styled";
import { registerSchema } from "./validationSchema";

import Button from "@components/shared/Button/Button";
import FormField from "@components/shared/FormControls/FormField/FormField";
import { ErrorStyled } from "@components/shared/FormControls/FormField/styled";
import { apiUrls } from "@constants/apiUrls";
import { notification } from "@constants/notificationMessages";
import { routes } from "@constants/routes";

import api from "@utils/api";

export default function RegisterForm() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    }
  });

  const registerUser = async (body) => {
    try {
      setIsLoading(true);
      await api.post(apiUrls.auth.register, body);
      toast.success(notification(t).register.success);

      setTimeout(() => {
        navigate(routes.login.path);
      }, 0);
    } catch (error) {
      toast.error(notification(t).login.error);
      setError("notRegisteredInput", {
        type: "custom",
        message: t("somethingWentWrong")
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values) => {
    await registerUser(values);
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormField
        register={register}
        errors={errors}
        name="firstName"
        label={t("firstName")}
        type="text"
        dirtyFields={dirtyFields}
      />
      <FormField
        register={register}
        errors={errors}
        name="lastName"
        label={t("lastName")}
        type="text"
        dirtyFields={dirtyFields}
      />
      <FormField
        register={register}
        errors={errors}
        name="email"
        label={t("email")}
        type="email"
        dirtyFields={dirtyFields}
      />

      <FormField
        register={register}
        errors={errors}
        name="password"
        label={t("password")}
        type="password"
        dirtyFields={dirtyFields}
      />

      {errors?.notRegisteredInput && (
        <ErrorStyled>{errors?.notRegisteredInput?.message}</ErrorStyled>
      )}

      <Button type="submit" fluid isLoading={isLoading}>
        {t("register")}
      </Button>

      <Button type="button" href={routes.login.path} variant="link">
        {t("login")}
      </Button>
    </RegisterFormStyled>
  );
}
