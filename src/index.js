import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(420);
console.log("server on port",420);