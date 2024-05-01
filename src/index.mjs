import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const mockUsers = [
  { id: 1, username: "markikaundi", displayName: "Mark Sikaundi" },
  { id: 2, username: "joy", displayName: "Joy Dev" },
  { id: 3, username: "david", displayName: "David Jiri" },
];

const mockLaptops = [
  { id: 1, name: "Macbook Pro", price: 2000 },
  { id: 2, name: "iPhone 12", price: 1000 },
  { id: 3, name: "Samsung Galaxy S21", price: 800 },
];

// localhost:3000/api/hello-world
app.get("/api/hello-world", (req, res) => {
  res.send("Hello, from Lupleg Community");
});

// localhost:3000/api
app.get("/api", (req, res) => {
  res.send("Hello World");
});

// localhost:3000/users
app.get("/api/users", (req, res) => {
  res.send(mockUsers);
});

// localhost:3000/api/users/id
app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
  if (isNaN(parsedId))
    return res.status(400).send({ msg: "Bad Requesr. Invalid ID" });

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return res.status(404);
  return res.send(findUser);
});

// localhost:3000/api/laptops
app.get("/api/laptops", (req, res) => {
  res.send(mockLaptops);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/users/1
// localhost:3000/products
