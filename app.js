import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import poemRouter from "./routers/poemRouter";

const app = express();

app.use(helmet()); // for securerity
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // for logging

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.poems, poemRouter);

export default app;
