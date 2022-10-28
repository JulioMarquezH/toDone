import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import FormSelect from "components/forms/select";

import schema from "./models";
import { optionsStatus } from "helpers/statusTasks";
import { optionsPriority } from "helpers/priorityMessages";

import { toast } from "react-toastify";
import "./styles.css";
window.toast = toast;

function CreateGoal() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    toast("Wow so easy!");
  };
  return (
    <div className="box-modal">
      <section className="content-modal">
        <p className="add-modal">
          Add <strong className="project-modal">Goal</strong>
        </p>
        <p className="title-project">Project: tal y tal</p>
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
            errors={errors}
            control={control}
            options={optionsStatus}
          />
          <FormSelect
            name="priority"
            errors={errors}
            control={control}
            options={optionsPriority}
          />
          <input type="submit" className="save-project" value="Save" />
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default CreateGoal;
