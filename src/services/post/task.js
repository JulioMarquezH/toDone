import mutation from "../mutation";

const postTask = async (
  { name, description, status, priority, assign, belong },
  token
) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await mutation(token).post("/tasks", {
        name,
        description,
        status,
        priority,
        assign,
        belong,
      });
      console.log(data);
      resolve(data);
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });

export default postTask;
