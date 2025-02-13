import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
// para validar el formulario hook

function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });
    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
                registerErrors.map((error, i) => (
                    <div className="bg-red-500 pd-2 text-white" key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Nombre" />
                {errors.username && (<p className="text-red-500">El nombre de usuario es requerido</p>)}

                <input type="email" {...register("mail", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Correo" />
                {errors.mail && (<p className="text-red-500">El correo es requerido</p>)}

                <input type="password" {...register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Contraseña" />
                {errors.password && (<p className="text-red-500">La contraseña es requerido</p>)}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Enviar
                </button>
            </form>
            <p className="flex gap-x-2 justify-between">
                Ya tienes cuenta?<Link className="text-sky-500" to="/login"> Iniciar sesion </Link>
            </p>
        </div>
    );
}

export default RegisterPage