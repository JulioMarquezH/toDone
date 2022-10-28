const TOKEN = "token";
const USER_ID = "userId";

const getLocalToken = () => localStorage.getItem(TOKEN);
const setLocalToken = (token) => localStorage.setItem(TOKEN, token);

const getLocalUserId = () => localStorage.getItem(USER_ID);
const setLocalUserId = (userId) => localStorage.setItem(USER_ID, userId);

export { getLocalToken, setLocalToken };
export { getLocalUserId, setLocalUserId };
