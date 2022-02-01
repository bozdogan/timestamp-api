const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({info: "this is API root."});
});

router.get("/:date_str", (req, res) => {
    const { date_str } = req.params;
    res.json({date_str: date_str});
});

module.exports = router;