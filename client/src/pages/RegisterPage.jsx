import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
// para validar el formulario hook

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async(values)=>{
            const res = await registerRequest(values);
            console.log(res);  
        });
        return (
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                <form onSubmit={onSubmit}> 
                    <input type="text" {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Nombre" />
                    <input type="email" {...register("mail", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Correo" />
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Contraseña" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
                        Enviar
                    </button>
                </form>
            </div>
        );
    }
    
export default RegisterPage