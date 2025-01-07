import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";
import jwt from "jsonwebtoken";


const app = express();


app.use(express.static("./images"));
app.use(bodyParser.json());

const SECRET_KEY = "your_secret_key";

// Generate a JWT token
const createJSONToken = (email) => {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
};
// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/pratos", async (req, res) => {
  const fileContent = await fs.readFile("./data/pratos.json");

  const pratosData = JSON.parse(fileContent);

  res.status(200).json({ pratos: pratosData });
});

app.get("/pratosConsumidor", async (req, res) => {
  const fileContent = await fs.readFile("./data/pratosConsumidor.json");

  const pratos = JSON.parse(fileContent);

  res.status(200).json({ pratos });
});
app.get("/pedidosCozinha", async (req, res) => {
  const fileContent = await fs.readFile("./data/pedidosCozinha.json");

  const pedidos = JSON.parse(fileContent);

  res.status(200).json(pedidos);
});


app.post("/signup", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);
  const newUser = req.body;
  users.push(newUser);
  await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));
  res.status(200).json({ message: "User inserted!" });
})
app.post("/pratos", async (req, res) => {
  const fileContent = await fs.readFile("./data/pratos.json");
  const pratos = JSON.parse(fileContent);
  const novoPrato = req.body;
  pratos.push(novoPrato);
  await fs.writeFile("./data/pratos.json", JSON.stringify(pratos, null, 2));
  res.status(200).json({ message: "User inserted!" });
})
app.post("/pedidosCozinha", async (req, res) => {
  const fileContent = await fs.readFile("./data/pedidosCozinha.json");
  const pedidos = JSON.parse(fileContent)
  const novoPedido = req.body;
  pedidos.push(novoPedido);
  await fs.writeFile("./data/pedidosCozinha.json", JSON.stringify(pedidos, null, 2));
  res.status(200).json({ message: "User inserted!" });
})

app.put("/pratosConsumidor", async (req, res) => {
  const pratos = req.body.pratos;

  await fs.writeFile("./data/pratosConsumidor.json", JSON.stringify(pratos));

  res.status(200).json({ message: "User pratos updated!" });
});


app.post("/login", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);

  const email = req.body.email;
  const password = req.body.password;
  

  const login = users.find((u) => u.email === email && u.password === password);

  if (!login) {
    return res.status(422).json({
      message: "Invalid credentials.",
      errors: { credentials: "Invalid email or password entered." },
    });
  }

  const token = createJSONToken(email);

  const AuthUser = {
    token: token,
    email: login.email,
    name: login.name,
    role: login.role,
  };

  res.json(AuthUser);
});
// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});



app.listen(3000);
