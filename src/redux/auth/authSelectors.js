
const selectAuthUser = state => state.auth.user;
const selectAuthUserName = state => state.auth.user.name;
const selectAuthUserEmail = state => state.auth.user.email;
const selectAuthIsLogged = state => state.auth.isLoggedIn;
const selectAuthIsRefreshing = state => state.auth.isRefreshing;




export {
  selectAuthUser,
  selectAuthIsLogged,
  selectAuthIsRefreshing,
  selectAuthUserEmail,
  selectAuthUserName,
};
