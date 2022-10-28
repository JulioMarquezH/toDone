import mutation from "../mutation";
import { setLocalUserId, setLocalToken } from "services/storage/local";

const postLogin = async ({ email, password }, setToken, setUserId) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await mutation().post("/login", { email, password });
      setToken(data.data.data.token);
      setUserId(data.data.data.user.id);
      setLocalToken(data.data.data.token);
      setLocalUserId(data.data.data.user.id);
      resolve(data);
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });

export default postLogin;
