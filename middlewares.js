import routes from "./routes";
export const localMidlleware = (req, res, next) => {
    res.locals.siteName = "Oup";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};
