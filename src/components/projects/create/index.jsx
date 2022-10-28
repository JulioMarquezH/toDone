import schema from "./models";
import { Controller, useForm } from "react-hook-form";

import { ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";

import { yupResolver } from "@hookform/resolvers/yup";

import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
window.toast = toast;

function CreateProject() {
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
        <p className="creacte-modal">
          Create <strong className="project-modal">Project</strong>
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
          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <DatePicker
                className="title-task"
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          <p className="error-creacte">{errors.start?.message}</p>
          <Controller
            name="end"
            control={control}
            render={({ field }) => (
              <DatePicker
                className="title-task"
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          <p className="error-creacte">{errors.end?.message}</p>
          <input type="submit" className="save-project" value="Save" />
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default CreateProject;
