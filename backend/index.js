import { app } from "./app.js";
import conectTodb from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

conectTodb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection failed !!", err);
  });
