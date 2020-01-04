export const userDetail = (req, res) => {
    res.render("user/userDetail", { pageTitle: "user detail" });
};

export const changePassword = (req, res) => {
    res.render("user/changePassword", { pageTitle: "change password" });
};

export const editProfile = (req, res) => {
    res.render("user/editProfile", { pageTitle: "edit profile" });
};
