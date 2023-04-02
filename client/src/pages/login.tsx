import { UserManager } from '@/utils';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = async (e: any) => {
        e.preventDefault();
        const resp = await UserManager.login({ username, password });
        if (resp) {
            Router.push("/");

        }

    }


    return (
        <div className="w-full max-w-xs mx-auto mt-32">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onLoginHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="reset">
                        Forgot Password?
                    </Link>
                </div>
                <br />
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="signup">Sign up</Link>
            </form>
            <p className="text-center text-gray-500 text-xs">
                ©2023 All rights reserved.
            </p>
        </div>

    )
}
