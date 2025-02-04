import express from "express";

import userRouter from "/src/UserRouter";

// using the middleware
app.use("/api/v1/users", userRouter);

const app = express();
const PORT = 8000;

// Using middleware for the post body
app.use(express.json());

// Using the CRUD methods on the server

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
