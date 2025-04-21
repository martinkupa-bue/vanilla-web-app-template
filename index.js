import express from "express";

const PORT = process.env.PORT;

const app = express();

app.use(express.static("./static"));

app.listen(PORT, () => console.log(`Express running on port ${PORT}`));