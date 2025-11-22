import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        setEmail("")
        setPassword("")

    }
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => {
                    submithandler(e)


                }} className='flex flex-col items-center justify-cen`ter'>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}

                        required
                        type="email"
                        placeholder='enter your email'
                        className='border-2
                        text-white
                         border-emerald-600 rounded-full py-2 px-5
                         text-xl outline-none bg-transparent placeholder:text-white'

                    />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                        required
                        type="password"
                        placeholder='enter your password'
                        className='border-2
                        text-white
                         border-emerald-600 rounded-full py-2 px-5
                         text-xl outline-none bg-transparent mt-3 placeholder:text-white'
                    />
                    <button className=' border-none mt-5
                        text-white
                          rounded-full py-2 px-5
                         text-xl outline-none bg-emerald-600 cursor-pointer  placeholder:text-white'>Log in</button>
                </form>
            </div>


        </div>
    )
}

export default Login