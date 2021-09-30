const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const { User } = require('../database/models/')
const USER_KEY = process.env.USER_KEY;



const createUserObject = async (data) => ({
    firstName: data.firstName,
    lastName: data.lastName,
    password: bcrypt.hashSync(data.password, 10),
    phone: data.phone,
    email: data.email,

})

async function comparePasswords(reqPassword, userPassword) {
    try {
        const passwordsMatch = await bcrypt.compareSync(reqPassword, userPassword )
        return [passwordsMatch, null]
    } catch (error) {
        return [error, null]
    }
}

exports.signUp = async (req, res) => {
    const emailExists = await User.findOne({ where: { email: req.body.email} })
    if (emailExists) return res.status(200).send({ message: "email already exists" })

    try {
        const newUser = await createUserObject(req.body)

        const savedUser = await User.create(newUser)
        if(savedUser) return res.status(200).send({ message: "User created successfully" , savedUser})
    } catch (error) {
        res.status(400).send({ message: "Error while creating user", error })
    }

}


exports.logIn = async (req, res) => {
    const foundUser = await User.findOne({ where: { email: req.body.email }})
    if(!foundUser) return res.status(200).send({ message: "invalid login credentials" })

    const [ passwordsMatch, error ] = await comparePasswords(req.body.password, foundUser.password )
    if (!passwordsMatch) return res.status(400).send({message: "invalid login credentials"}) 
    if (error) return res.status(400).send(error) 
    
    const token = await jwt.sign({ id: foundUser.id }, USER_KEY)
    return res.status(200).header("auth-token", token).send({ message: "Login succesful" })
    
}