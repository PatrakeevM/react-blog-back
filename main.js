import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 7777;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Новое приложение");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Что-то пошло не так");
  }

  console.log(`Приложение успешно запущено на порте ${port}`);
});

// Авторизация (Auth)
app.post("/auth/register");
