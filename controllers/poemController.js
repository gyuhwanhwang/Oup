import poems from "../db";

export const upload = (req, res) => {
    res.render("poem/upload", { pageTitle: "upload" });
};

export const poemDetail = (req, res) => {
    res.render("poem/poemDetail", { pageTitle: "poem detail", poems });
};

export const deletePoem = (req, res) => {
    res.render("poem/deletePoem", { pageTitle: "delete poem" });
};
