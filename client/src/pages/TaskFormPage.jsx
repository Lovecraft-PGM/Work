import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })


  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <form onSubmit={onSubmit}>

        <input type="text" placeholder="Titulo"

          {...register("title")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" autoFocus />

        <textarea rows="3" placeholder="Descripcion"

          {...register("description")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"></textarea>

        <input type="date" placeholder="Fecha inicio"

          {...register("date")} autoFocus />

        <input type="date" placeholder="Fecha inicio"

          {...register("endDate")} autoFocus />

        <button>Crear</button>

      </form>

    </div>
  )

}

export default TaskFormPage;