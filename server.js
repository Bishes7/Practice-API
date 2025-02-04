import express from "express";

const app = express();

import userRouter from "./src/UserRouter.js";

// Using middleware for the post body
app.use(express.json());

// using the middleware
app.use("/api/v1/users", userRouter);

const PORT = 8000;

// Using the CRUD methods on the server

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
