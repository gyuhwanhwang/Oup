import routes from "../routes";

export const home = (req, res) => {
    res.render("global/home");
};

export const join = (req, res) => {
    res.render("global/join");
};

export const login = (req, res) => {
    res.render("global/login");
};

export const logout = (req, res) => {
    res.redirect(routes.home);
};

export const search = (req, res) => {
    res.render("global/search");
};
