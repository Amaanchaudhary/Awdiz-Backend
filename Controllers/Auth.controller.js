import UserModals from "../Modals/User.modals.js";

export const Login = (req, res) => {
    res.send("Hello from login")
}
export const Register = async (req, res) => {
    // res.send("Hello from login") 
    try {
        // console.log(req.body, "Body");
        const { name, email, password, number } = req.body;

        if (!name || !email || !password, !number) return res.status(401).json({ sucess: false, message: "All Fields are mandatory." })

        const user = new UserModals({
            name: name,
            email,
            password,
            number
        })

        await user.save();

        return res.status(200).json({ success: true, message: "Registration Succesfull." })

    } catch (error) {
        return res.status(500).json({ sucess: false, message: error })
    }
}