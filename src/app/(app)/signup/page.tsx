'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';

type SignupFormInputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Signup: NextPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupFormInputs>();
    const onSubmit: SubmitHandler<SignupFormInputs> = data => {
        // Handle signup logic here
        console.log('Signing up with', data);
    };

    const password = watch('password');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
                <Link href={'/'} className="flex justify-center mb-6" >
                    <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 p-2 w-full border rounded-lg"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full border rounded-lg"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 w-full border rounded-lg"
                            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 p-2 w-full border rounded-lg"
                            {...register('confirmPassword', { required: 'Confirm Password is required', validate: value => value === password || 'Passwords do not match' })}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">Sign Up</button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <Link href="/login" passHref>
                        <span className="text-blue-500 hover:underline cursor-pointer">Log in</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
