const bcrypt = require('bcrypt');
const UserModel = require("../Models/User");
const jwt = require('jsonwebtoken');
const signup = async (req,res) =>
{
    try{
        const {name,email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
                .json({message:'User is alredy existig,you can login',success : false});
        }
        const userModel = new UserModel({name,email,password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message : "signup Successful",
                success : true,
            })

    }catch(err)
    {
        res.status(500)
            .json({
                message : "Internal server error",
                success : false,
            })

    }

}

const login = async (req,res) =>
    {
        try{
            const {email,password} = req.body;
            const user = await UserModel.findOne({email});
            const errorMessage = 'Auth Failed email or password is wrong ';
            if(!user){
                return res.status(403)
                    .json({message: errorMessage ,success : false});
            }
            const isPassEqual = await bcrypt.compare(password, user.password);
            if(!isPassEqual)
            {
                return res.status(403)
                    .json({message: errorMessage ,success : false});
            }
            const jwtToken = jwt.sign(
                {email: user.email, _ud : user.id},
                process.env.JWT_SECRET,
                {expiresIn : '24h'}
            )
            res.status(200)
                .json({
                    message : "Login Successful",
                    success : true,
                    jwtToken,
                    email,
                    name : user.name,
                })
    
        }catch(err)
        {
            res.status(500)
                .json({
                    message : "Internal server error",
                    success : false,
                })
    
        }
    
    }

module.exports ={
    signup,
    login
}