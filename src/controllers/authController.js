import User from "../models/userModel.js";
import JWT from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import bcrypt from "bcryptjs"
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { mail, password, username } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10) //hash

        const newUser = new User({
            username,
            mail,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token);
        res.json({
            message: "User created successfully"
        });
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            mail: userSaved.mail
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { mail, password } = req.body;

    try {
        const userFound = await User.findOne({ mail });
        if (!userFound) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

        const token = await createAccessToken({ id: userFound._id });
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            mail: userFound.mail
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
};

// export const profile = async (req, res) => {
//     const userFound = await User.findById(req.user.id);
//     if (!userFound) return res.status(400).json({ message: "User not found" });
//     return res.json({
//         id: userFound._id,
//         username: userFound.username,
//         mail: userFound.mail
//     });
//     // console.log(req.user);
//     // res.send("profile");

// }
export const profile = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);

    JWT.verify(token, TOKEN_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401);

        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);

        return res.json({
            id: userFound._id,
            username: userFound.username,
            mail: userFound.mail,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    });
};