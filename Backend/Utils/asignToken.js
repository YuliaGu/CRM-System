function assignToken(user, res) {
    delete user.password

    const token = jwt.sign(user, process.env.PRIVATE_ACCESS_KEY)

    res.cookie("token", token, {
        httpOnly: true,
        secure: true
    })
}

export {assignToken}