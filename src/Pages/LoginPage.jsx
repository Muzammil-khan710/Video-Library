import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { Header, Sidebar } from '../Components'
import { useAuth } from '../Context/AuthContext'

const LoginPage = () => {

    const { login } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword]  = useState("")

  return (
    <>
        <Header/>
        <div className='flex'>
            <Sidebar/>
            <section className='container flex flex-col bg-white h-[22rem] w-[17rem] ml-[6rem] sm:w-[20rem] mt-[12rem] sm:mx-auto rounded'  >
                <div className='text-center m-3 text-2xl'>Login</div>
                <form action="" className='flex flex-col'>
                    <label htmlFor="" className='px-4'>Email</label>
                    <input type="email" className='border-2  mx-4 outline-none pl-2' value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="" className='px-4 mt-4'>Password</label>
                    <input type="password" className='border-2 mx-4 outline-none pl-2 ' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={(e) => login(e,email, password)} className='bg-[#334756] w-[4rem] py-2 mt-4 self-center rounded-md hover:bg-slate-500 active:bg-slate-400 text-white'>Login</button>

                </form>
                <button  onClick={() => {setEmail("testuser@gmail.com"); setPassword("testuser@123")}} className='mt-3 bg-[#334756]  hover:bg-slate-500 self-center px-3 py-2 text-white rounded'>Use Test Credentials</button>
                <div className='text-center mt-2'>New here? <Link className='underline' to="/signup">sign up</Link> </div>
            </section>
        </div>
    </>
  )
}

export { LoginPage }