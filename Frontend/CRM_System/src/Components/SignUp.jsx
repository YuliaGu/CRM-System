import { useRef } from "react"

import { apiPost, isLoggedIn } from "../Services/axiosAPI"

export function SignUp() {
    const formData = useRef()
    const passwordInput = useRef()
    const confirmPasswordInput = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
    }

    function checkPassword(){
        if(passwordInput.current.value === confirmPasswordInput.current.value){
            console.log('Password match')
            // return true
        }
        else{
            console.log('Try again')
        }
    }

    async function signup(){
        try {
            const credentials = {
                firstName: formData.current.firstName?.value,
                lastName: formData.current.lastName?.value,
                email: formData.current.email?.value,
                password: formData.current.password?.value
            }
            // console.log(credentials);
            const response = await apiPost("auth/signup", credentials)
            console.log(response)
        } 
        catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <form ref={formData} onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="firstName" >
                        Please fill in your first name:
                    </label>
                    <input id="firstName" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="lastName" >
                        Please fill in your last name: 
                    </label>
                    <input id="lastName" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="businessName" >
                        Please fill in your business name: 
                    </label>
                    <input id="businessName" />
                </span>
                <br />
                <span>
                    <label htmlFor="email" >
                        Please fill in your email: 
                    </label>
                    <input id="email" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="password" >
                        Please fill in your password: 
                    </label>
                    <input ref={passwordInput} id="password" type="password" />
                </span>
                <br />
                <span>
                    <label htmlFor="confirmPassword" >
                        Please fill in your password again: 
                    </label>
                    <input ref={confirmPasswordInput} id="confirmPassword" type="password" onChange={checkPassword} />
                </span>
                <br />
                <button onClick={signup}>
                    SignUp
                </button>
            </form>
        </>)
} 