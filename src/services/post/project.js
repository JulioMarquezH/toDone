import mutation from "../mutation";

const postLogin = async ({ name, description, start, end, has }, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await mutation(token).post("/projects", {
        name,
        description,
        start,
        end,
        has,
      });
      console.log(data);
      resolve(data);
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });

export default postLogin;
