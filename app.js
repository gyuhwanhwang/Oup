import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet()); // for securerity
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // for logging

app.use(routes.home, globalRouter);

export default app;
