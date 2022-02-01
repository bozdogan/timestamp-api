const express = require("express");

function renderResponse(date) {
    return {
        "unix": Math.floor(date.getTime()/1000),
        "utc": date.toUTCString()
    };
}

function parseTimestamp(date_str){
    // NOTE: Try parsing UTC format first
    const dateValue = new Date(date_str).getTime();
    const isValid = !isNaN(dateValue);
    
    if(isValid) {
        return renderResponse(new Date(date_str));
    } else {
        // NOTE: If `date_str` is an integer assume it is a UNIX timestamp.
        if(/^\d+$/.test(date_str)) {
            const timestamp = parseInt(date_str);
            return renderResponse(new Date(timestamp*1000));
        }
    }
    
    return {error: "Invalid Date"};
}

const router = express.Router();

router.get("/", (req, res) => {
    res.json(parseTimestamp(new Date()));
});

router.get("/:date_str", (req, res) => {
    const { date_str } = req.params;
    res.json(parseTimestamp(date_str));
});

module.exports = router;