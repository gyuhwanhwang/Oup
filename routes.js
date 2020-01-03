// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const CHANGE_PASSWORD = "/change-password";
const EDIT_PROFILE = "/edit-profile";

// Poems
const POEMS = "/poems";
const UPLOAD = "/upload";
const POEM_DETAIL = "/:id";
const DELETE_POEM = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    // user
    users: USERS,
    userDetail: USER_DETAIL,
    changePassword: CHANGE_PASSWORD,
    editProfile: EDIT_PROFILE,
    //poem
    poems: POEMS,
    upload: UPLOAD,
    poemDetail: POEM_DETAIL,
    deletePoem: DELETE_POEM
};

export default routes;
