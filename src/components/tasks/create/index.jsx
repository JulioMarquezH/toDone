import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import useUser from "stores/useUser";

import getSchema from "./models";
import postTask from "services/post/task";
import FormSelect from "components/forms/select";
import { optionsStatus } from "helpers/statusTasks";
import { yupResolver } from "@hookform/resolvers/yup";
import { optionsPriority } from "helpers/priorityMessages";

import { toast } from "react-toastify";
import "./styles.css";
window.toast = toast;

function CreateTask({ optionsUsers, optionsGoals }) {
  const users = optionsUsers.map((item) => item.value);
  const goals = optionsGoals.map((item) => item.value);
  const schema = getSchema(users, goals);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const token = useUser((state) => state.token);
  const onSubmit = (data) => {
    toast.promise(postTask(data, token), {
      pending: "Processing your request",
      success: "You have create new task 👌",
      error: "Your credentials were rejected 🤯",
    });
  };
  return (
    <div className="box-modal">
      <section className="content-modal">
        <p className="creacte-modal">
          Create <strong className="task-modal">Task</strong>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <input
              className="title-task"
              placeholder="Title"
              {...register("name")}
            />
            <p className="error-creacte">{errors.name?.message}</p>
          </section>
          <section>
            <textarea
              placeholder="Description"
              cols="30"
              rows="10"
              className="description-task"
              {...register("description")}
            ></textarea>
            <p className="error-creacte">{errors.description?.message}</p>
          </section>
          <FormSelect
            name="status"
            options={optionsStatus}
            control={control}
            errors={errors}
          />
          <FormSelect
            name="priority"
            options={optionsPriority}
            control={control}
            errors={errors}
          />
          <FormSelect
            name="belong"
            options={optionsGoals}
            control={control}
            errors={errors}
          />
          <FormSelect
            name="assign"
            options={optionsUsers}
            control={control}
            errors={errors}
          />
          <input type="submit" className="save-project" value="Save" />
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default CreateTask;
