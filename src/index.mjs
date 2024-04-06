import express, { response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/api/users", (request, response) => {
  response.send([{ id: 1, username: "mark", displayName: "Mark Sikaundi" },
  { id: 2, username: "terry", displayName: "Tery M" },
  { id: 3, username: "joe", displayName: "Joe Y" },
  { id: 4, username: "sarah", displayName: "Sarah" }
]);
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
