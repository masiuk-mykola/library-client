import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { routes } from "@constants/routes";

export const languages = {
  en: { nativeName: "English" },
  ua: { nativeName: "Українська" }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          hello: "Hello {{name}}",
          bob: "<p>Here you will find a simple tutorial on how to best use react-i18next. </p>",
          [routes.dashboard.title]: routes.dashboard.title,
          [routes.profile.title]: routes.profile.title,
          [routes.readers.title]: routes.readers.title,
          [routes.authors.title]: routes.authors.title,
          addingDate: "Adding date",
          libraryCode: {
            title: "Library Code",
            required: "Library code is required"
          },
          authorCode: {
            title: "Author Code",
            required: "Author code is required"
          },
          title: {
            title: "Title",
            required: "Title is required"
          },
          authorFirstName: {
            title: "Author First Name",
            required: "Author first name is required"
          },
          authorLastName: {
            title: "Author Last Name",
            required: "Author last name is required"
          },
          cityOfPublication: {
            title: "City of Publication",
            required: "City of publication is required"
          },
          publishingHouse: {
            title: "Publishing House",
            required: "Publishing house is required"
          },
          yearOfPublishing: {
            title: "Year of Publishing",
            required: "Year of publishing is required"
          },
          numberOfPages: {
            title: "Number of Pages",
            required: "Number of pages is required"
          },
          numberOfCopies: {
            title: "Number of Copies",
            required: "Number of copies is required"
          },
          location: {
            title: "Location",
            required: "Location is required"
          },
          sourceOfReceipt: {
            title: "Source of Receipt",
            required: "Source of receipt is required"
          },
          "Add book": "Add book",
          email: "Email",
          password: "Password",
          login: "Log in",
          logout: "Logout",
          register: "Register",
          forgotPassword: "Forgot password?",
          firstName: "First name",
          lastName: "Last name",
          registerSuccess: "You have been successfully registered!",
          loginSuccess: "You have been successfully logged in!",
          logoutSuccess: "You have been successfully logged out!",
          registerError: "Register operation failure!",
          loginError: "Login operation failure!",
          logoutError: "Logout operation failure!",
          wrongCredentials: "Email or password is wrong",
          passwordLength: "Password must be at least 8 characters",
          emailRequired: "Email is a required field",
          emailExample: "Email needs to be in format example@domain.com",
          somethingWentWrong: "Something went wrong",
          changeTheme: "Change theme",
          addBookSuccess: "Book successfully added",
          addBookError: "Adding book failure"
        }
      },
      ua: {
        translation: {
          hello: "Привіт {{name}}",
          bob: "<p>Тут ви знайдете простий посібник про те, як найкраще використовувати react-i18next..</p>",
          [routes.dashboard.title]: "Картотека",
          [routes.profile.title]: "Профіль",
          [routes.readers.title]: "Читачі",
          [routes.authors.title]: "Автори",
          addingDate: "Дата додавання",
          libraryCode: {
            title: "Код бібліотеки",
            required: "Код бібліотеки є обовʼязковим"
          },
          authorCode: {
            title: "Код автора",
            required: "Код автора є обовʼязковим"
          },
          title: {
            title: "Назва",
            required: "Назва є обовʼязковою"
          },
          authorFirstName: {
            title: "Імʼя автора",
            required: "Імʼя автора є обовʼязковим"
          },
          authorLastName: {
            title: "Прізвище автора",
            required: "Прізвище автора є обовʼязковим"
          },
          cityOfPublication: {
            title: "Місто публікації",
            required: "Місто публікації є обовʼязковим"
          },
          publishingHouse: {
            title: "Видавництво",
            required: "Видавництво є обовʼязковим"
          },
          yearOfPublishing: {
            title: "Рік публікації",
            required: "Рік публікації є обовʼязковим"
          },
          numberOfPages: {
            title: "К-сть сторінок",
            required: "К-сть сторінок є обовʼязковою"
          },
          numberOfCopies: {
            title: "К-сть примірників",
            required: "К-сть примірників є обовʼязковою"
          },
          location: {
            title: "Розташування",
            required: "Розташування є обовʼязковим"
          },
          sourceOfReceipt: {
            title: "Джерело надходження",
            required: "Джерело надходження є обовʼязковим"
          },
          "Add book": "Додати книгу",
          email: "Пошта",
          password: "Пароль",
          login: "Aвторизуватися",
          logout: "Вихід із системи",
          register: "Зареєструватися",
          forgotPassword: "Забули пароль?",
          firstName: "Імʼя",
          lastName: "Прізвище",
          registerSuccess: "Ви успішно зареєстровані!",
          loginSuccess: "Ви успішно увійшли!",
          logoutSuccess: "Ви успішно вийшли з системи!",
          registerError: "Помилка операції реєстрації!",
          loginError: "Помилка входу!",
          logoutError: "Помилка операції виходу!",
          wrongCredentials: "Електронна пошта або пароль неправильні",
          passwordLength: "Пароль має бути не менше 8 символів",
          emailRequired: "Поле електронної пошти є обов’язковим для заповнення",
          emailExample:
            "Електронна адреса має бути у форматі example@domain.com",
          somethingWentWrong: "Щось пішло не так",
          changeTheme: "Змінити тему",
          addBookSuccess: "Книга успішно додана",
          addBookError: "Помилка додавання книги"
        }
      }
    }
  });
