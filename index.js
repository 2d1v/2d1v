const express = require("express");
const app = express();

const ROBLOX_IPS = ["128.116.", "198.244.", "3.80."];
const DISCORD_WEBHOOK ="https://discord.com/api/webhooks/1398524771175632967/0yf3WYajOTDUowHHPybsRT_wPlUuznGKsWeUPtSk3sjZYDwEOESKJ1OUSUqkcD4fBPb";

app.get("/", (req, res) => {
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    let isRoblox = ROBLOX_IPS.some(prefix => clientIP.startsWith(prefix));

    if (!isRoblox) {
        return res.send("i gotchu men");
    }

    res.send(DISCORD_WEBHOOK);
});

app.listen(3000, () => console.log("Server started on port 3000"));
