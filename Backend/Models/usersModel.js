import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})
const usersModel = mongoose.model('users', userSchema)

export default usersModel