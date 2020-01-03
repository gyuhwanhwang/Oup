export const upload = (req, res) => {
    res.render("poem/upload");
};

export const poemDetail = (req, res) => {
    res.render("poem/poemDetail");
};

export const deletePoem = (req, res) => {
    res.render("poem/deletePoem");
};
