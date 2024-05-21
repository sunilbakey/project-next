'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'rsuite'

const CreateUser = () => {
    const router = useRouter()

    return (
        <>
            <div className="mb-6">
                <div className="flex justify-between justify-items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold" >Create User</h2>
                    </div>
                </div>
            </div>

            <form className="max-w-sm">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Position</label>
                    <input type="text" id="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>


                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>

                <Button >Default</Button>

                <a href="#" className="font-medium text-gray-600 dark:text-gray-500" onClick={() => router.back()}>Cancel</a>
        
            </form>
        </>
    )
}

export default CreateUser;