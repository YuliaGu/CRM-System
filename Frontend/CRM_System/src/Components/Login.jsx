import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { isLogedinContext } from '../Contexts/isLogedinContext'
import { apiPost, isLoggedIn } from "../Services/axiosAPI"

export function Login() {
    const navigate = useNavigate()
    
    const formData = useRef()
    const emailInput = useRef()

    const {isLogedin, setIsLogedin} = useContext(isLogedinContext)

    async function handleSubmit(e) {
        try {
            e.preventDefault() // prevent screen refresh and loss of data..
            const email = e.target.email.value
            const password = e.target.password.value

            const response = true  // await axios.post(true)
            if (response) { // in case of a successful login
                setIsLogedin(true)
                navigate('/dashboard')
            } 
            else { // in case login failed
                alert("login failed, please try again!")
                emailInput.current.focus()
            }
        } 
        catch (error) {
            console.error(error.message)
        }
    }

    async function login(){
        try {
            const credentials = {
                email: formData.current.email.value,
                password: formData.current.password.value
            }
            const response = await apiPost("auth/login", credentials)
            console.log(response)
        } 
        catch (error) {
            console.error(error.message)
        }

        setIsLogedin(!isLogedin)
        console.log(isLogedin);
        navigate('/dashboard',
            {
                state: {
                    name: "name here",
                    isLogedin: isLogedin
                }
            }
        )
    }

    return (
        <>
            <form ref={formData} onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="email" >
                        Please fill in your email:
                    </label>
                    <input ref={emailInput} id="email" name="email" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="password" >
                        Please fill in your password:
                    </label>
                    <input id="password" name="password" type="text" />
                </span>
                <br />
                <button onClick={login}>
                    Log in
                </button>
            </form >
        </>)
}