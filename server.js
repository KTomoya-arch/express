const express = require("express");

const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

app.get("/", (req, res) => {
  // console.log("hello express");
  // res.send("こんにちは");
  res.status(500).json({ msg: "error", id: "suuu" });
});

// ルーティング
app.use("/user", userRouter);

app.listen(PORT, () => console.log("サーバが起動しました"));
