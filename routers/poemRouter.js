import express from "express";
import routes from "../routes";
import {
    poemDetail,
    deletePoem,
    getUpload,
    postUpload
} from "../controllers/poemController";

const peomRouter = express.Router();

peomRouter.get(routes.upload, getUpload);
peomRouter.post(routes.upload, postUpload);
peomRouter.get(routes.deletePoem, deletePoem);
peomRouter.get(routes.poemDetail(), poemDetail);

export default peomRouter;
