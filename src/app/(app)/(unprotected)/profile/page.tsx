'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const mockUser = {
    name: "Gloria Posture",
    address: "123 Main Street, City, Country",
    phone: "(123) 456-7890",
    email: "gloria@example.com",
    image: "/images/user-profile.png",
    rating: 4.5,
    jobsCompleted: 50,
    hoursWorked: 120,
    positiveReviews: 90,
    averageRating: 4.0,
};

const UserProfile: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>User Profile</title>
            </Head>
            <div className="container mx-auto p-4">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-center mb-6">
                        <Image src={mockUser.image} alt="User Profile" width={100} height={100} className="rounded-full" />
                    </div>
                    <h1 className="text-2xl font-bold text-center mb-2">{mockUser.name}</h1>
                    <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < mockUser.rating ? "text-yellow-500" : "text-gray-300"} />
                        ))}
                        <span className="ml-2 text-gray-600">({mockUser.rating.toFixed(1)})</span>
                    </div>
                    <div className="text-center text-gray-700 mb-4">
                        <p className="flex items-center justify-center"><FaMapMarkerAlt className="mr-2" /> {mockUser.address}</p>
                        <p className="flex items-center justify-center"><FaPhoneAlt className="mr-2" /> {mockUser.phone}</p>
                        <p className="flex items-center justify-center"><FaEnvelope className="mr-2" /> {mockUser.email}</p>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Details</h2>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-100 p-4 rounded-lg text-center">
                            <p className="text-xl font-bold">{mockUser.jobsCompleted}</p>
                            <p className="text-gray-600">Jobs Completed</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg text-center">
                            <p className="text-xl font-bold">{mockUser.hoursWorked}</p>
                            <p className="text-gray-600">Hours Worked</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg text-center">
                            <p className="text-xl font-bold">{mockUser.positiveReviews}</p>
                            <p className="text-gray-600">Positive Reviews</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg text-center">
                            <p className="text-xl font-bold">{mockUser.averageRating.toFixed(1)}</p>
                            <p className="text-gray-600">Average Rating</p>
                        </div>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">Hire Now</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
