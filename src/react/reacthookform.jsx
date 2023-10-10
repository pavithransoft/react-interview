import { useForm } from "react-hook-form";

function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" placeholder="Name" />
      <input {...register("email")} type="text" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookForm;
