const express = require("express");

const app = express();
const PORT = 3000;
const auth = require("./routes/auth");

app.use(express.json());
app.use("/auth", auth);

app.get("/", (req, res) => {
  "";
});
app.listen(PORT, () => console.log("サーバが起動しました"));
