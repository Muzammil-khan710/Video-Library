
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    :null)
    
    const [token, setToken] = useState(localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    :null)

    const login = async (e, email, password) => {
        e.preventDefault()
      
       try {
        const { data } = await axios.post(`/api/auth/login`, {
            email,
            password
        });

        setUser(data.foundUser);
        setToken(data.encodedToken)
        localStorage.setItem("token", JSON.stringify(data.encodedToken))
        localStorage.setItem("user", JSON.stringify({ _id : data.foundUser._id, email : data.foundUser.email, firstName : data.foundUser.firstName, lastName : data.foundUser.lastName}))

       } catch (error) {
            console.log({error})
       }

    }

    const signup = async (e, newuser) => {
        e.preventDefault()

        try {
            const { data } =  await axios.post(`/api/auth/signup`, newuser)
            setUser(data.createdUser)
            setToken(data.encodedToken)
            localStorage.setItem("token", JSON.stringify(data.encodedToken))
            localStorage.setItem("user",  JSON.stringify({ _id : data.createdUser._id, email : data.createdUser.email, firstName : data.createdUser.firstName, lastName : data.createdUser.lastName, password : data.createdUser.password}) )
    
        } catch (error) {
            console.log({error})
        }
    }
        
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null)
        setToken(null)
        window.location.reload()
    }

    return(
        <AuthContext.Provider value={{login, signup, user, token, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }