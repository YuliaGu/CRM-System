import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

import "./connection.js"
import app from "./app.js"
import authRouter from "./Routers/authRouter.js"

app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    // origin: 'http://localhost:3002'
    origin: '*',
    credentials: true
}
app.use(cors(corsOptions))

app.use("/auth", authRouter)






app.listen(3002, () => {
    console.log("listening on port 3002...")
})