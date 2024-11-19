import { yupResolver } from "@hookform/resolvers/yup";
import { Grid2 } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { defaultValues, formFieldsData } from "./config";

import { validationSchema } from "./validationSchema";

import Button from "@components/shared/Button/Button";
import FormField from "@components/shared/FormControls/FormField/FormField";
import { apiUrls } from "@constants/apiUrls";
import { notification } from "@constants/notificationMessages";
import api from "@utils/api";

export const AddBookForm = ({ handleAddBook }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(validationSchema(t)),
    defaultValues
  });

  const addBook = async ({ firstName, lastName, ...values }) => {
    const payload = {
      author: {
        firstName,
        lastName
      },
      ...values
    };
    try {
      setIsLoading(true);
      await api.post(apiUrls.books.addBook, payload);
      toast.success(notification(t).addBook.success);
      handleAddBook();
    } catch (er) {
      toast.error(notification(t).addBook.error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values) => {
    await addBook(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2
        container
        rowSpacing={3}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3
        }}
        sx={{ marginBottom: 2.5 }}
      >
        {formFieldsData(t).map(({ name, label, type }) => (
          <Grid2 item xs={6} key={name}>
            <FormField
              register={register}
              errors={errors}
              name={name}
              label={label}
              type={type}
              dirtyFields={dirtyFields}
            />
          </Grid2>
        ))}
      </Grid2>

      <Button type="submit" fluid isLoading={isLoading}>
        {t("Add book")}
      </Button>
    </form>
  );
};

AddBookForm.propTypes = {
  handleAddBook: PropTypes.func.isRequired
};
