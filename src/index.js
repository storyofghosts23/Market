import app from "./app.js";
import conn from "./db.js";

conn();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});