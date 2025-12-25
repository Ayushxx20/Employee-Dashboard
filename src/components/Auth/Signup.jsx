import React, { useState } from 'react'

const Signup = ({ handleSignup, switchToLogin }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleSignup(name, email, password)
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        type="text"
                        placeholder='Enter your name'
                        className='border-2 text-white border-emerald-600 rounded-full py-2 px-5 text-xl outline-none bg-transparent placeholder:text-white'
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        type="email"
                        placeholder='Enter your email'
                        className='border-2 text-white border-emerald-600 rounded-full py-2 px-5 text-xl outline-none bg-transparent mt-3 placeholder:text-white'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        type="password"
                        placeholder='Enter your password'
                        className='border-2 text-white border-emerald-600 rounded-full py-2 px-5 text-xl outline-none bg-transparent mt-3 placeholder:text-white'
                    />
                    <button className='border-none mt-5 text-white rounded-full py-2 px-5 text-xl outline-none bg-emerald-600 cursor-pointer'>
                        Sign Up
                    </button>
                </form>
                <p className='text-white text-center mt-4'>
                    Already have an account?
                    <button onClick={switchToLogin} className='text-emerald-400 ml-2 underline bg-transparent border-none cursor-pointer'>
                        Login
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Signup