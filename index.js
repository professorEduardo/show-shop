import express from "express";
const app = express();

import cors from "cors";

app.use(express.json());
app.use(cors());

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

app.post("/", async (req, res) => {
  const { prodctName, price, imageUrl, description } = req.body;
  console.log(
    "--------------------------------------------------------------------------------------------"
  );
  console.log(prodctName, price, imageUrl, description);
  const product = await prisma.product.create({
    data: {
      name: prodctName,
      price: price,
      imageUrl: imageUrl,
      description: description,
    },
  });

  res.json(product);
});

app.delete("/:id", async (req, res) => {
  const product = await prisma.product.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json(200);
});
