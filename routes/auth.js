const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const { User } = require("../db/User");

router.get("/", (req, res) => {
  res.send("Hello Auth");
});

// ユーザー新規登録用API
router.post(
  "/register",
  // バリデーションチェック
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // // DBにユーザーが存在している？
    const user = User.find((user) => {
      return user.email === email;
    });

    if (user) {
      return res.status(400).json([
        {
          message: "すでにそのユーザーは存在しています。",
        },
      ]);
    }
    return res.json({ message: "ユーザー登録が完了しました。" });
  }
);

module.exports = router;
