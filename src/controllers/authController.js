import User from "../models/userModel.js";

export const register = async (req, res) => {
    const { mail, password, username } = req.body;

    try {
        const newUser = new User({
            username,
            mail,
            password
        });
        await newUser.save();
        res.send("registrando");
    } catch (error) {
        console.log(error);
    }
}
export const login = (req, res) => res.send("login");