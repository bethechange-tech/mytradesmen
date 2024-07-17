'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

type Params = {
    params: {
        category: string;
    };
};

// Define a user type
type User = {
    id: number;
    name: string;
    experience: string;
};

// Define a type for the collection of users with a string index signature
type UserCollections = {
    [key: string]: User[];
};

const fetchUsersByCategory = (category: string): User[] => {
    const users: UserCollections = {
        'Electrical': [
            { id: 1, name: 'John Doe', experience: '5 years' },
            { id: 2, name: 'Jane Smith', experience: '3 years' }
        ],
        'Plumbing': [
            { id: 3, name: 'Alice Johnson', experience: '8 years' },
            { id: 4, name: 'Bob Lee', experience: '4 years' }
        ],
        'Carpentry': [
            { id: 5, name: 'Carlos Kidman', experience: '10 years' },
            { id: 6, name: 'Elaine Marie', experience: '5 years' }
        ],
        'Landscaping': [
            { id: 7, name: 'Fiona Glenanne', experience: '7 years' },
            { id: 8, name: 'Gregory House', experience: '6 years' }
        ],
        'Painting': [
            { id: 9, name: 'Henry Cavill', experience: '9 years' },
            { id: 10, name: 'Irene Adler', experience: '3 years' }
        ],
        'Roofing': [
            { id: 11, name: 'Jason Bourne', experience: '12 years' },
            { id: 12, name: 'Kim Wexler', experience: '4 years' }
        ],
        'HVAC': [
            { id: 13, name: 'Lucy Heartfilia', experience: '6 years' },
            { id: 14, name: 'Martin Riggs', experience: '8 years' }
        ],
    };

    return users[category] || [];
};

const CategoryPage: NextPage<Params> = ({ params: { category } }) => {
    const users = fetchUsersByCategory(category);
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFavorite = (userId: number) => {
        setFavorites(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>{category} Services</title>
            </Head>
            <div className="container mx-auto px-4 py-10">
                <header className="flex justify-between items-center py-6">
                    <Link href="/" passHref>
                        <div className="text-blue-500 hover:underline cursor-pointer">Go back</div>
                    </Link>
                    <h1 className="text-3xl font-bold text-blue-600">{category} Services</h1>
                </header>
                {users.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {users.map(user => (
                            <div key={user.id} className="relative bg-white rounded-lg shadow p-4 flex flex-col items-center text-center transition duration-300 ease-in-out">
                                <Link href={`/profiles/${user.id}`} passHref>
                                    <div className="cursor-pointer">
                                        <div className="relative w-full h-40 mb-4">
                                            <Image
                                                src="/image.png" // Replace with actual user image if available
                                                alt={user.name}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-t-lg"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold">{user.name}</h3>
                                        <p className="text-gray-600">{user.experience}</p>
                                    </div>
                                </Link>
                                <div className="absolute top-4 right-4 flex items-center space-x-2">
                                    <button
                                        onClick={() => toggleFavorite(user.id)}
                                        className="focus:outline-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={favorites.includes(user.id) ? "yellow" : "none"}
                                            viewBox="0 0 24 24"
                                            stroke={favorites.includes(user.id) ? "yellow" : "currentColor"}
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.92 9.393c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex justify-center space-x-3 mt-4">
                                    <button className="bg-gray-200 p-2 rounded-full focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.93 6.93a10 10 0 1110.14 0m-4.07 10.14a3.5 3.5 0 11-5.07-5.07" />
                                        </svg>
                                    </button>
                                    <button className="bg-gray-200 p-2 rounded-full focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7v14" />
                                        </svg>
                                    </button>
                                    <button className="bg-gray-200 p-2 rounded-full focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500">No available professionals found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
