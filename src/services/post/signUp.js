import mutation from "../mutation";
import { setLocalUserId, setLocalToken } from "services/storage/local";

const postSignUp = async ({ email, password }, setToken, setUserId) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await mutation().post("/sign-up", { email, password });
      setToken(data.data.data.token);
      setUserId(data.data.data.user.id);
      setLocalUserId(data.data.data.token);
      setLocalToken(data.data.data.user.id);
      resolve(data);
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });

export default postSignUp;
