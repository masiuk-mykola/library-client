import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginFormStyled } from "./styled";
import { loginSchema } from "./validationSchema";

import Box from "@components/shared/Box/Box";
import Button from "@components/shared/Button/Button";
import FormField from "@components/shared/FormControls/FormField/FormField";
import { ErrorStyled } from "@components/shared/FormControls/FormField/styled";
import { apiUrls } from "@constants/apiUrls";
import { userTokenLSKey } from "@constants/common";
import { notification } from "@constants/notificationMessages";
import { routes } from "@constants/routes";
import { useLocalStorage } from "@hooks/useLocalStorage";

import { setProfile } from "@store/authSlice";
import api, { setAuthHeader } from "@utils/api";

export default function LoginForm() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useLocalStorage(userTokenLSKey);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const login = async (body) => {
    try {
      setIsLoading(true);
      const data = await api.post(apiUrls.auth.login, body);
      setAuthHeader(data.token);
      setValue(data.token);

      setTimeout(() => {
        navigate(routes.dashboard.path);
      }, 0);
      toast.success(notification(t).login.success);
    } catch (er) {
      toast.error(notification(t).login.error);
      setError("notRegisteredInput", {
        type: "custom",
        message: t("wrongCredentials")
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getProfile = async () => {
    const data = await api.get(apiUrls.auth.getProfile);
    return data.librarian;
  };

  const { data: userData } = useQuery({
    queryKey: [apiUrls.profiles],
    queryFn: () => getProfile(),
    enabled: Boolean(value)
  });

  const onSubmit = async (values) => {
    await login(values);
    dispatch(setProfile(userData));
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
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
        {t("login")}
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Button type="button" href={routes.register.path} variant="link">
          {t("register")}
        </Button>

        <Button
          type="button"
          href={routes.passwordRecovery.path}
          variant="link"
        >
          {t("forgotPassword")}
        </Button>
      </Box>
    </LoginFormStyled>
  );
}
