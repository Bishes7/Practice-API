import express from "express";

const router = express.Router();

// GET MEthod
router.get("/", (req, res) => {
  console.log(req.query);
  DB.push(req.query);
  res.json({
    message: "this is a get method",
    DB,
  });
});

// POST Method
router.post("/", (req, res) => {
  DB.push(req.body);
  console.log(req.body);
  res.json({
    message: "New user added",
  });
});

// PUT MEthod
router.put("/", (req, res) => {
  console.log(req.body, req.headers.authorization);
  res.json({
    message: "put method",
  });
});

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

// Delete Method
router.delete("/:id?", (req, res) => {
  console.log(req.params);
  DB.push(req.params);
  res.json({
    message: "delete method",
  });
});

export default router;
