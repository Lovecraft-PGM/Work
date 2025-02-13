import { useForm } from "react-hook-form";
import { isBefore, parse } from 'date-fns';

function TaskFormPage2() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const startDate = watch("date");

  const onSubmit = (data) => {
    // Transformar los datos al formato del modelo
    const formattedData = {
      title: data.title,
      description: data.description,
      date: { $date: data.date ? new Date(data.date).toISOString() : null }, // Manejo de fechas nulas
      endDate: { $date: data.endDate ? new Date(data.endDate).toISOString() : null }, // Manejo de fechas nulas
      priority: data.priority,
    };
    console.log(formattedData);
   
  };

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ... (resto del formulario) */}
        <input type="text" placeholder="Titulo" {...register("title", { required: "El título es requerido" })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" autoFocus />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <textarea rows="3" placeholder="Descripcion" {...register("description")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"></textarea>

        <input type="date" {...register("date", { required: "La fecha de inicio es requerida" })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2" />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}

        <input type="date" {...register("endDate", { required: "La fecha de fin es requerida", validate: (value) => { if (!startDate) { return "Selecciona primero la fecha de inicio"; } const parsedStartDate = parse(startDate, 'yyyy-MM-dd', new Date()); const parsedEndDate = parse(value, 'yyyy-MM-dd', new Date()); if (isBefore(parsedEndDate, parsedStartDate)) { return "La fecha de fin no puede ser anterior a la fecha de inicio"; } } })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2" />
        {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}

        <select {...register("priority")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2">
          <option value="high">Alta</option>
          <option value="medium">Media</option>
          <option value="low">Baja</option>
        </select>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 my-2">
          Crear
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage2;