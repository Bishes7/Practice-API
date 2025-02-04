import express from "express";

const router = express.Router();

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

// Delete Method
router.delete("/:id?", (req, res) => {
  const { id } = req.params;

  const initialLength = DB.length;

  // Filter out the object
  DB = DB.filter((item) => item.id !== +id);

  // Check if the object is actually deleted
  if (DB.length === initialLength) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    message: `User with id ${id} deleted`,
    DB,
  });
});

export default router;
