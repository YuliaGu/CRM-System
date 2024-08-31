import { Router } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import usersModel from "../Models/usersModel.js"
// import { assignToken } from "../Utils/asignToken.js"

const router = Router()

router.post("/login", async (req, res) => {
    try{
        const credentials = req.body
        const user = await usersModel.findOne({ email: credentials.email })
        if (!user) return res.sendStatus(403)
        const similar = await bcrypt.compare(credentials.password, user.password)
        if (!similar) return res.sendStatus(403)
        assignToken(user.toJSON(), res)
        res.send("user is logged in...")
    }
    catch (error) {
        res.send(error.message)
    }
})

router.post("/signup", async (req, res) => {
    try {
        const user = req.body   
        const existingUser = await usersModel.findOne({ email: user.email })
        if (existingUser) return res.sendStatus(403)
        const hashedPassword = await bcrypt.hash(user.password, 10)
        user.password = hashedPassword
        await usersModel.insertMany(user)
        // await usersModel.create(user)
        assignToken(user, res)
        res.send("user is saved successfully...")
    } 
    catch (error) {
        res.send(error.message)
    }
})

function assignToken(user, res) {
    delete user.password
    const token = jwt.sign(user, process.env.PRIVATE_ACCESS_KEY)
    res.cookie("token", token, {
        httpOnly: true,
        secure: true
    })
}

export default router