import routes from "./routes";
export const localMidlleware = (req, res, next) => {
    res.locals.siteName = "Oup";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: false,
        id: 2
    };
    next();
};
