import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

function TaskFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Import errors from formState
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Titulo"
            {...register("title", { required: "El título es requerido" })} 
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
            autoFocus
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>} 

          <textarea
            rows="3"
            placeholder="Descripcion"
            {...register("description", { required: "La descripción es requerida" })} 
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          ></textarea>
          {errors.description && <p className="text-red-500">{errors.description.message}</p>} 

          <input
            type="date"
            placeholder="Fecha Fin"
            {...register("endDate", {
              required: "La fecha de fin es requerida",
              validate: (value) => {
                const selectedDate = new Date(value);
                const currentDate = new Date();
                if (selectedDate < currentDate) {
                  return "La fecha de fin debe ser posterior a la fecha actual";
                }
              },
            })} // Add date validation
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          />
          {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>} {/* Display error message */}

          <select {...register("priority")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2">
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;