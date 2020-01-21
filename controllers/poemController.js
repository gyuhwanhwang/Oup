import poems from "../db";
import routes from "../routes";

export const getUpload = (req, res) => {
    res.render("poem/upload", { pageTitle: "upload" });
};

export const postUpload = (req, res) => {
    const {
        body: { title, description }
    } = req;
    console.log(title, description);
    res.redirect(routes.poemDetail(131));
};

export const poemDetail = (req, res) => {
    res.render("poem/poemDetail", { pageTitle: "poem detail", poems });
};

export const deletePoem = (req, res) => {
    res.render("poem/deletePoem", { pageTitle: "delete poem" });
};
