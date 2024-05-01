import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

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
  res.send([
    { id: 1, username: "markikaundi", displayName: "Mark Sikaundi" },
    { id: 2, username: "joy", displayName: "Joy Dev" },
    { id: 3, username: "david", displayName: "David Jiri" },
  ]);
});

app.get("/api/users/:id", (req, res) => {
    console.log(req.params);
});





// localhost:3000/api/laptops
app.get("/api/laptops", (req, res) => {
  res.send([
    { id: 110, name: "Macbook Pro", price: 2000 },
    { id: 111, name: "iPhone 12", price: 1000 },
    { id: 112, name: "Samsung Galaxy S21", price: 800 },
  ]);
}
);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/users/1
// localhost:3000/products
