import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ZodForm() {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(12),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log("IT WORKED", data);
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <input type="text" placeholder="Email" {...register("email")} />
      {errors.email && <span>{errors.email?.message}</span>}

      <input type="text" placeholder="Password" {...register("password")} />
      {errors.password && <span>{errors.password?.message}</span>}

      <button>Submit</button>
    </form>
  );
}
