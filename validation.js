import { body } from "express-validator";

export const registerValidation = [
  body("fullName", "Укажите ваше имя").isLength({ min: 2 }),
  body("email", "Укажите действительный адрес эл. почты").isEmail(),
  body(
    "password",
    "Пароль должен содержать минимум 5 и максимум 12 символов"
  ).isLength({
    min: 5,
    max: 12,
  }),
  body("avatarUrl", "Фото профиля не найдено").optional().isURL(),
];
