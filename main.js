import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 7777;

app.get("/", (req, res) => {
  res.send("Новое приложение");
});

app.listen(port, () => {
  console.log(`Приложение успешно запущено на порте ${port}`);
});
