import express from "express";

const app = express();
const PORT = 8000;

// Using middleware for the post body
app.use(express.json());

let DB = [
  {
    id: 1,
    fName: "Bishes",
    lName: "Adhikari",
  },
  {
    id: 2,
    fName: "LAB",
    lName: "Bhandari ",
  },
];

// Using the CRUD methods on the server

// GET MEthod
app.get("/", (req, res) => {
  //   console.log(req.query);
  //   DB.push(req.query);
  res.json({
    message: "this is a get method",
    DB,
  });
});

// POST Method
app.post("/", (req, res) => {
  DB.push(req.body);
  console.log(req.body);
  res.json({
    message: "New user added",
  });
});

// PUT MEthod
app.put("/", (req, res) => {
  res.json({
    message: "put method",
  });
});

// Delete Method
app.delete("/", (req, res) => {
  console.log(req.body);
  DB.push(req.body);
  res.json({
    message: "delete method",
  });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
