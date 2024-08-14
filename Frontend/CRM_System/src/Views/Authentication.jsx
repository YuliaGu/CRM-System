import { useEffect, useState } from "react"
import { Login } from '../Components/Login'
import { SignUp } from '../Components/SignUp'
import { userExists } from '../Services/auth'
import { useNavigate } from 'react-router-dom'

export function Authentication(){
    const navigate = useNavigate()

    // if (userExists(true)){
    //     navigate("/dashboard")
    // }

    const [existingUser, setExistingUser] = useState(true)
    const [authMessage, setAuthMessage] = useState()

    function toggleAuthMessage(){
        if(existingUser){
            setAuthMessage("Not a user, sign up!")
        } 
        else{
            setAuthMessage("Already a user, log in!")
        }
    }

    useEffect(() => {
        toggleAuthMessage()
    }, [existingUser])

    return (<>
        {existingUser && <Login />}
        {!existingUser && <SignUp />}

        <button onClick={() => setExistingUser(!existingUser)}>
            {authMessage}
        </button>
    </>)
}