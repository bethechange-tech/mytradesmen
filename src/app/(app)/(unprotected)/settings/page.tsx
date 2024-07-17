'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';

type PersonalInfoInputs = {
    name: string;
    email: string;
};

type PasswordInputs = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
};

type NotificationsInputs = {
    emailNotifications: boolean;
    smsNotifications: boolean;
};

const Settings: React.FC = () => {
    const {
        register: registerPersonalInfo,
        handleSubmit: handleSubmitPersonalInfo,
        formState: { errors: personalInfoErrors }
    } = useForm<PersonalInfoInputs>();

    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        watch: watchPassword,
        formState: { errors: passwordErrors }
    } = useForm<PasswordInputs>();

    const {
        register: registerNotifications,
        handleSubmit: handleSubmitNotifications,
        formState: { errors: notificationsErrors }
    } = useForm<NotificationsInputs>();

    const onSubmitPersonalInfo: SubmitHandler<PersonalInfoInputs> = data => {
        console.log('Personal Info:', data);
        // Handle personal info update logic here
    };

    const onSubmitPassword: SubmitHandler<PasswordInputs> = data => {
        console.log('Password Change:', data);
        // Handle password change logic here
    };

    const onSubmitNotifications: SubmitHandler<NotificationsInputs> = data => {
        console.log('Notification Preferences:', data);
        // Handle notification preferences update logic here
    };

    const newPassword = watchPassword('newPassword');

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>Settings</title>
            </Head>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-6">Settings</h1>

                {/* Personal Information Section */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    <form onSubmit={handleSubmitPersonalInfo(onSubmitPersonalInfo)}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 p-2 w-full border rounded-lg"
                                {...registerPersonalInfo('name', { required: 'Name is required' })}
                            />
                            {personalInfoErrors.name && <p className="text-red-500 text-sm">{personalInfoErrors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 w-full border rounded-lg"
                                {...registerPersonalInfo('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                })}
                            />
                            {personalInfoErrors.email && <p className="text-red-500 text-sm">{personalInfoErrors.email.message}</p>}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                            Save Changes
                        </button>
                    </form>
                </div>

                {/* Password Change Section */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                    <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
                        <div className="mb-4">
                            <label htmlFor="currentPassword" className="block text-gray-700">Current Password</label>
                            <input
                                type="password"
                                id="currentPassword"
                                className="mt-1 p-2 w-full border rounded-lg"
                                {...registerPassword('currentPassword', { required: 'Current Password is required' })}
                            />
                            {passwordErrors.currentPassword && <p className="text-red-500 text-sm">{passwordErrors.currentPassword.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-gray-700">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                className="mt-1 p-2 w-full border rounded-lg"
                                {...registerPassword('newPassword', { required: 'New Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                            />
                            {passwordErrors.newPassword && <p className="text-red-500 text-sm">{passwordErrors.newPassword.message}</p>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="mt-1 p-2 w-full border rounded-lg"
                                {...registerPassword('confirmPassword', { required: 'Confirm Password is required', validate: value => value === newPassword || 'Passwords do not match' })}
                            />
                            {passwordErrors.confirmPassword && <p className="text-red-500 text-sm">{passwordErrors.confirmPassword.message}</p>}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                            Change Password
                        </button>
                    </form>
                </div>

                {/* Notification Preferences Section */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
                    <form onSubmit={handleSubmitNotifications(onSubmitNotifications)}>
                        <div className="mb-4">
                            <label htmlFor="emailNotifications" className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="emailNotifications"
                                    className="mr-2"
                                    {...registerNotifications('emailNotifications')}
                                />
                                Email Notifications
                            </label>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="smsNotifications" className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="smsNotifications"
                                    className="mr-2"
                                    {...registerNotifications('smsNotifications')}
                                />
                                SMS Notifications
                            </label>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                            Save Preferences
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;
