import routes from "../routes";
import poems from "../db";
export const home = (req, res) => {
    res.render("global/home", { pageTitle: "home", poems });
};

export const getJoin = (req, res) => {
    res.render("global/join", { pageTitle: "join" });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, nickname, password1, password2 }
    } = req;
    if (password1 !== password2) {
        res.status(400);
        res.render("global/join", { pageTitle: "join" });
    } else {
        // temp
        res.redirect(routes.home);
    }
};

export const login = (req, res) => {
    res.render("global/login", { pageTitle: "login" });
};

export const logout = (req, res) => {
    res.redirect(routes.home);
};

export const search = (req, res) => {
    const {
        query: { searching: searchingBy }
    } = req;
    res.render("global/search", { pageTitle: "search", searchingBy, poems });
};

export const developer = (req, res) => {
    res.redirect("https://github.com/gyuhwanhwang");
};
