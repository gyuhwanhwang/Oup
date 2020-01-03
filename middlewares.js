export const localMidlleware = (req, res, next) => {
    res.locals.siteName = "Oup";
    next();
};
