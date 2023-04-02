import { UserManager } from '@/utils';
import Link from 'next/link';
import Router from 'next/router'
import React, { useState } from 'react'

export default function Verify() {
    const [code, setCode] = useState('');
    return (

        <div className="w-full max-w-xs mx-auto mt-32">

            <h3>A code has been sent to your phone number <strong>{Router.query.phone}</strong></h3>
            <br />
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={async (e) => {
                e.preventDefault();
                try {
                    const res = await UserManager.verify({
                        phoneNumber: Router.query.phone as string,
                        code
                    })
                    if (Router.query.newPassword) {
                        Router.push({
                            pathname: "newpassword",
                            query: {
                                phone: Router.query.phone
                            }
                        });
                    } else {
                        Router.push("login");
                    }
                } catch (e) {
                    alert("something went wrong, please try")
                    console.log(e);
                }
            }}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Code
                    </label>
                    <input value={code} onChange={(e) => setCode(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="code here.." />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Verify</button> <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="signup">Sign up</Link>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                ©2023 All rights reserved.
            </p>
        </div>


        // 


        // <form onSubmit={}>
        //     <input type="text" placeholder='code here..'  />
        //     <button type="submit">Verify</button>
        //     <br />
        //     <br />
        //     <button onClick={() => { }} disabled>Resend code again</button>
        // </form>
    )
}
