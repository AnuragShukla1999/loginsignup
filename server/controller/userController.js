import User from "../model/userModel.js";
import jwt from "jsonwebtoken";


export const SignIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

    if (!email || !password || email == "" || password == "") {
        res.status(401).json({
            message: "please enter email and password",
            success: false
        })
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(500).json({
            message: "user not exist"
        })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h', });

    return res.status(201).cookie('access_token', token, {
        httpOnly: true,
      }).json({
        message: "sign in successfully",
        token,
        success: true
    })

    } catch (error) {
        next(error)
    }

}


export const SignUp = async (req, res, next) => {
        const { email, password } = req.body;

        try {
            const user = new User({
                email,
                password
            });
    
            await user.save();
    
            res.status(201).json({
                message: "User created successfully",
                success: true
            })
        } catch (error) {
            next(error)
        }
}