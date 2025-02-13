import {z} from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    mail:z.string({
        required_error:"Email is required",
    }).email({
        message: "Invalid mail"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(7,{message: "Password must be at least 7 characters",
    })
});
export const loginSchema = z.object({
    mail:z.string({
        required_error: "El correo es requerido",
    }).email({
        message:"El correo no es valido",
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
    }).min(7,{
        message:"La contraseña debe ser minimo 7 caracteres",
    })
})