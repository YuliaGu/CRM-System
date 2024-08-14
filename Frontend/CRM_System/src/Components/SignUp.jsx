import { useRef } from "react"

export function SignUp() {
    const passwordInput = useRef()
    const confirmPasswordInput = useRef()

    function checkPassword(){
        if(passwordInput.current.value === confirmPasswordInput.current.value){
            console.log('Password match')
            // return true
        }
        else{
            console.log('Try again')
        }
    }

    return (
        <>
            <form>
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
                    <input id="last name" type="text" />
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
                <button>
                    SignUp
                </button>
            </form>
        </>)
} 