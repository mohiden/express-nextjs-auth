import { UserManager } from '@/utils';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react'

export default function NewPassword() {
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    return (
        <div className="w-full max-w-xs mx-auto mt-32">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={async (e) => {
                e.preventDefault();

                const resp = await UserManager.newPassword({
                    password,
                    passwordConfirmation,
                    phoneNumber: Router.query.phone as string
                });
                if (resp) {
                    Router.push("login");
                }
            }}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        New Password
                    </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordConfirmation">
                        New Password confirmation
                    </label>
                    <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="passwordConfirmation" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Reset</button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="reset">
                        Forgot Password?
                    </Link>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                ©2023 All rights reserved.
            </p>
        </div>
        // <form onSubmit={}>
        //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //     <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        //     <button type="submit">Reset</button>
        // </form>
    )
}
