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
        required_error: "Email is required",
    }).email({
        message:"Invalid email",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(7,{
        message:"Password must be at least 7 characters",
    })
})