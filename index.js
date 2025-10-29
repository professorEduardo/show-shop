import express from "express";
const app = express();

import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

app.listen(3000, () => {
  console.log("port 3000");
});

app.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  console.log(products);
  res.json(products);
});

app.get("/create", async (req, res) => {
  const user = await prisma.product.create({
    data: {
      name: "gato",
      price: "15.00",
      description: "gato daora",
    },
  });

  res.redirect("https://3s5tmk-5500.csb.app/");
});
