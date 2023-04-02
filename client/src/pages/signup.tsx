import { UserManager } from '@/utils';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const onSignupHandler = async (e: any) => {
        e.preventDefault();
        try {

            const res = await UserManager.signup({
                username,
                password,
                passwordConfirmation,
                phoneNumber
            });
            Router.push({
                pathname: "/verify",
                query: { phone: res.phoneNumber }
            });
        } catch (error) {

        }

    }

    return (
        <div className="w-full max-w-xs mx-auto mt-32">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSignupHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                        phone number
                    </label>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="text" placeholder="+251..." />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordConfirmation">
                        Password confirmation
                    </label>
                    <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="passwordConfirmation" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign up
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="reset">
                        Forgot Password?
                    </Link>
                </div>
                <br />
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="login">Login</Link>
            </form>
            <p className="text-center text-gray-500 text-xs">
                ©2023 All rights reserved.
            </p>
        </div>

        // <form style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }} onSubmit={} >
        //     <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        //     <input type="text" value={phoneNumber} placeholder="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
        //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //     <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        //     <button type='submit'>sign up</button>
        //     <br />
        //     <Link href="forget-password">login</Link>
        // </form >



    )
}
