import * as express from "express";
import * as morgan from "morgan";

const app = express();

app.use(morgan('dev'));

app.get("/articles", (req, res) => {
    res.json({}).status(200)
});

app.listen(3000, () => console.log("[SERVER] running on 3000..."));

export {app}