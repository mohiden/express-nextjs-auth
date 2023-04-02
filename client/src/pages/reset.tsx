import { UserManager } from '@/utils';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react'

export default function Reset() {
    const [phone, setPhone] = useState('');
    return (

        <div className="w-full max-w-xs mx-auto mt-32">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={async (e) => {
                e.preventDefault();
                const res = await UserManager.reset(phone);
                if (res) Router.push({
                    pathname: "verify",
                    query: {
                        phone,
                        newPassword: true
                    }
                })
            }}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Phone number
                    </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="+251..." />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button> <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="signup">Sign up</Link>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                ©2023 All rights reserved.
            </p>
        </div>

    )
}
