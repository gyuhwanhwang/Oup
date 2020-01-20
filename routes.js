// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const DEVELOPER = "/developer";

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
    developer: DEVELOPER,
    // user
    users: USERS,
    users: USERS,
    userDetail: id => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    changePassword: CHANGE_PASSWORD,
    editProfile: EDIT_PROFILE,
    //poem
    poems: POEMS,
    upload: UPLOAD,
    poemDetail: id => {
        if (id) {
            return `/poems/${id}`;
        } else {
            return POEM_DETAIL;
        }
    },
    deletePoem: DELETE_POEM
};

export default routes;
