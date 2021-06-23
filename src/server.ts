import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("hello nlw!");
});

app.post("/test-post", (request, response) => {
  response.send("Usando método POST");
});

app.listen(3000, () => {
  console.log("Server is running");
});
