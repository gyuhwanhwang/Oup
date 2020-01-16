import express from "express";
import routes from "../routes";
import { upload, poemDetail, deletePoem } from "../controllers/poemController";

const peomRouter = express.Router();

peomRouter.get(routes.upload, upload);
peomRouter.get(routes.deletePoem, deletePoem);
peomRouter.get(routes.poemDetail(), poemDetail);

export default peomRouter;
