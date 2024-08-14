import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()

    // const [isLogedin, setIsLogedin] = useState(false)
    
    const formInput = useRef()

    async function handleSubmit(e) {
        try {
            e.preventDefault() // prevent screen refresh and loss of data..
            const email = e.target.email.value
            const password = e.target.password.value

            const response = true  // await axios.post(true)
            if (response) { // in case of a successful login
                // setIsLogedin(true)
                // console.log(isLogedin);
                navigate('/dashboard',
                    {
                        state: {
                            name: "name here",
                            isLogedin: true
                        }
                    }
                )
            } 
            else { // in case login failed
                alert("login failed, please try again!")
                formInput.current.focus()
            }
        } 
        catch (error) {
            console.error(error.message)
        }
    }

    function login(){
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
            <form onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="email" >
                        Please fill in your email:
                    </label>
                    <input ref={formInput} id="email" name="email" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="password" >
                        Please fill in your password:
                    </label>
                    <input id="password" name="password" type="text" />
                </span>
                <br />
                <button>
                    Log in
                </button>
            </form >
        </>)
}